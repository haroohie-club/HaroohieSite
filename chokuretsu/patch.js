// Patcher settings
const REPO_ORG = 'haroohie-club';
const REPO = 'ChokuretsuTranslationRelease';
const CORS_PROXY = 'https://cors.haroohie.club/';

// Debug flags
const DEBUG_MODE = false;
const DEBUG_PATCH = '';

// SHA checks
const SHA_CHECKS = true;
const REQUIRED_ROM_SHA = '78BD9E59B0D7432EC4D67AC76400A0162431AF9D4A724BF3D38764D13E6F6498'

// Bad ROM handling (if SHA checks are on)
const BAD_ROM_SHA = '0B07B8E888268A3F99161B8F79A5C8DF44C187A41ACF59E5D8D3DBBFD919DF75' // ROM of a known bad dump
const FIX_BAD_ROM = true;
const REPAIR_PATCH = './assets/repair-patch.xdelta'

// Available patches
const AVAILABLE_PATCHES = [
    /*
    {
        version: '0.1',
        date: 'April ??, 2022'
    },
    {
        version: '0.2',
        date: 'April ??, 2022'
    },
    */
].reverse();

// RomPatcher data variables
let romFile, patchFile, patch, tempFile, headerSize, romSha, isBadRom, repairPatchFile, repairPatch;

// Run when the window loads
window.onload = () => {
    if (AVAILABLE_PATCHES.length === 0) {
        showNotice('warning', 'There are no patches available yet! Please come back soon!')
        return;
    }
    let patcherDropDown = document.getElementById('patcher-version-dropdown');

    // Initialize version list
    let versionOptions = ''
    for (let i = 0; i < AVAILABLE_PATCHES.length; i++) {
        let patch = AVAILABLE_PATCHES[i];

        let version = patch.version;
        let date = patch.date;

        if (i === 0) {
            versionOptions += '<option value="' + version + '">v' + version + ' &#xFF0D; ' + date + ' &#xFF0D; Latest</option>;'
        } else {
            versionOptions += '<option value="' + version + '">v' + version + ' &#xFF0D; ' + date + '</option>;'
        }
    }
    patcherDropDown.innerHTML = versionOptions;
    patcherDropDown.disabled = false;

    // Unzipping library support
    let script = document.createElement('script');
    script.src = './patcher/js/zip.js/inflate.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    // When a ROM file is selected
    document.getElementById('input-file-rom').addEventListener('change', async function () {
        hideNotice();
        try {
            romFile = new MarcFile(this, _parseROM);
        } catch (error) {
            showNotice('error', 'Invalid ROM selected. Please select a valid <i>Suzumiya Haruhi no Chokuretsu</i> <code>.nds</code> ROM file.');
            return;
        }

        let patchButton = document.getElementById('patcher-patch-button');
        patchButton.classList.remove('disabled');
        patchButton.disabled = false;
    });

    // When the Patch ROM button is pressed
    document.getElementById('patcher-patch-button').addEventListener("click", function () {
        let version = getSelectedVersion();

        // Gets the file name
        parsePatchFile(getFileName(), version).then(arrayBuffer => {
            return new MarcFile(arrayBuffer);
        }).then(parsedFile => {
            patchFile = parsedFile;
            patchFile.littleEndian = false;
            patchFile.fileName = getFileName();

            let header = patchFile.readString(6);
            if (header.startsWith(ZIP_MAGIC)) {
                patch = false;
                ZIPManager.parseFile(patchFile);
            } else {
                patch = parseVCDIFF(patchFile);
            }
        }).then(async () => {
            isBadRom = false;
            if (SHA_CHECKS) {
                const SHA_CHECK_PROMISE = getRomSha(romFile).then(sha => {
                    romSha = sha.toUpperCase();
                });

                await SHA_CHECK_PROMISE;

                if (romSha !== REQUIRED_ROM_SHA) {
                    if (romSha === '') {
                        throw('Failed to calculate SHA-256 of your ROM.');
                    }
                    if (romSha === BAD_ROM_SHA) {
                        isBadRom = true;
                        if (!FIX_BAD_ROM) {
                            throw('The SHA-256 hash of the ROM you have selected matches that of a known bad ROM circulated on the internet that contains corrupt graphics and invalid header data. This ROM is unable to be patched.');
                        } else {
                            const REPAIR_ROM = parseRepairFile().then(repairArrayBuffer => {
                                return new MarcFile(repairArrayBuffer);
                            }).then(parsedRepairPatch => {
                                repairPatchFile = parsedRepairPatch;
                                repairPatchFile.littleEndian = false;
                                repairPatchFile.fileName = 'repair-patch.xdelta';

                                let header = repairPatchFile.readString(6);
                                if (header.startsWith(ZIP_MAGIC)) {
                                    repairPatch = false;
                                    ZIPManager.parseFile(repairPatchFile);
                                } else {
                                    repairPatch = parseVCDIFF(repairPatchFile);
                                }
                            }).then(() => {
                                showNotice('info', 'Repairing bad ROM...');
                                return applyPatch(repairPatch, romFile, false, 'repaired');
                            }).then(repairedRom => {
                                romFile = repairedRom;
                                showNotice('info', 'Repair patch applied!')
                            }).catch((error) => {
                                showNotice('error', '(Error repairing ROM) ' + error);
                            });

                            await REPAIR_ROM;
                        }
                    } else {
                        throw('Invalid ROM. Please make sure you selected the ROM for the right game and that you carefully followed the correct dumping instructions.');
                    }
                }
            }
        }).then(() => {
            showNotice('Patching ROM with ' + getFileName() + '...')
            return applyPatch(patch, romFile, false, 'english-v' + version);
        }).then(patchFile => {
            saveRomFile(patchFile);
        }).catch((error) => {
            showNotice('error', error);
        });
    });
}

// Parse the ROM zip and header data
function _parseROM() {
    if (romFile.readString(4).startsWith(ZIP_MAGIC)) {
        ZIPManager.parseFile(romFile);
    } else {
        if ((headerSize = canHaveFakeHeader(romFile))) {
        } else if ((headerSize = hasHeader(romFile))) {
        }
    }
}

function getRomSha(romFile) {
    return window.crypto.subtle.digest('SHA-256', romFile._u8array.buffer)
        .then(romHash => {
            let hashBytes = new Uint8Array(romHash);
            let hexString = '';
            for (let i = 0; i < hashBytes.length; i++) {
                hexString += padZeroes(hashBytes[i], 1);
            }
            return hexString;
        })
        .catch(function () {
            showNotice('error', 'Failed to calculate SHA-256 of your ROM.');
            return '';
        });
}

// Gets the name of the file needed to be fetched to patch
function getFileName() {
    let opEdSubsConfig = document.querySelector('input[name="op-ed-subtitling"]:checked').value;
    let voicedLineConfig = document.querySelector('input[name="voice-lines-subtitling"]:checked').value;
    let version = getSelectedVersion();

    // Possible file names: patch-(subbedoped|cleanoped)-(voicesubs|novoicesubs).xdelta
    return ('Chokuretsu-patch-v' + version + '-' + opEdSubsConfig + '-' + voicedLineConfig + '.xdelta');
}

// Returns the versioned patch file with the given name from the GitHub org
function parsePatchFile(fileName, version) {
    showNotice('info', 'Downloading patch...');

    let encodedUri;
    if (!DEBUG_MODE) {
        // Download from GitHub
        encodedUri = (CORS_PROXY + 'https://github.com/' + REPO_ORG + '/' + REPO + '/releases/download/' + version + '/' + fileName);
    } else {
        encodedUri = DEBUG_PATCH;
    }
    return fetchFile(encodedUri);
}

function parseRepairFile() {
    showNotice('info', 'Bad ROM detected! Fetching repair patch...');
    return fetchFile(REPAIR_PATCH);
}

function fetchFile(encodedUri) {
    let fileUri = decodeURI(encodedUri.trim());
    return fetch(fileUri).then(result => result.arrayBuffer()) // Gets the response and returns it as a blob
        .then(arrayBuffer => {
            return arrayBuffer;
        }).catch(function (error) {
            console.error(error);
            showNotice('error', 'An error occurred fetching a patch file: ' + error.message)
            return undefined;
        });
}

function applyPatch(patch, rom, validateChecksums, name) {
    if (patch && rom) {
        showNotice('info', 'Applying patch...');

        // Patch the rom
        try {
            patch.apply(rom, validateChecksums);
            return preparePatchedRom(rom, patch.apply(rom, validateChecksums), name);
        } catch (error) {
            console.error(error);
            showNotice('error', 'Error applying patch: ' + error.message);
        }

    } else {
        if (patch === undefined) {
            showNotice('error', 'Failed to retrieve the patch file.');
        } else {
            showNotice('error', 'Please choose a ROM first');
        }
    }
    return null;
}

// Prepare the final patched ROM
function preparePatchedRom(originalRom, patchedRom, name) {
    patchedRom.fileName = originalRom.fileName.replace(/\.([^\\.]*?)$/, ' (' + name + ').$1');
    patchedRom.fileType = originalRom.fileType;
    return patchedRom;
}

// Prompt the user to save the patched ROM file
function saveRomFile(patchedRom) {
    if (isBadRom) {
        showNotice('info', '<b>"You\'re using a bad ROM! A bad ROM! Penalty!"\n</b><br/>The SHA-256 checksum of the ROM you selected matches that of a known bad ROM that contains corrupt header data and graphics. A repair was performed on your ROM before English patches were applied.')
    } else {
        showNotice('info', '<b>Patch applied successfully!</b><br/>Enjoy the game!')
    }

    patchedRom.save();
}

function canHaveFakeHeader(romFile) {
    if (romFile.fileSize <= 0x600000) {
        for (let i = 0; i < HEADERS_INFO.length; i++) {
            if (HEADERS_INFO[i][0].test(romFile.fileName) && (romFile.fileSize % HEADERS_INFO[i][2] === 0)) {
                return HEADERS_INFO[i][1];
            }
        }
    }
    return 0;
}

function hasHeader(romFile) {
    if (romFile.fileSize <= 0x600200) {
        if (romFile.fileSize % 1024 === 0)
            return 0;

        for (let i = 0; i < HEADERS_INFO.length; i++) {
            if (HEADERS_INFO[i][0].test(romFile.fileName) && (romFile.fileSize - HEADERS_INFO[i][1]) % HEADERS_INFO[i][1] === 0) {
                return HEADERS_INFO[i][1];
            }
        }
    }
    return 0;
}

// Show the patcher status notice at the top of the patcher
function showNotice(noticeType, noticeMessage) {
    let messageBody = '';
    switch (noticeType) {
        case 'error':
            messageBody += '<i class="fa-solid fa-circle-xmark"></i>&nbsp;'
            break;
        case 'warning':
            messageBody += '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;'
            break;
        default:
            messageBody += '<i class="fa-solid fa-circle-info"></i>&nbsp;'
            break;
    }
    messageBody += noticeMessage;
    let patcherElement = document.getElementById('patcher-notice');
    patcherElement.innerHTML = messageBody;
    patcherElement.classList.remove('hidden');
}

// Hide the patcher status notice
function hideNotice() {
    let patcherElement = document.getElementById('patcher-notice');
    if (!patcherElement.classList.contains('hidden')) {
        patcherElement.classList.add('hidden');
    }
}

// Returns the selected version
function getSelectedVersion() {
    return document.getElementById('patcher-version-dropdown').value;
}