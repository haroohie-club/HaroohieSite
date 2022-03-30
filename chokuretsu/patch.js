// Patcher settings
const REPO_ORG = 'haroohie-club';
const REPO = 'ChokuretsuTranslationRelease';
const CORS_PROXY = 'https://cors.haroohie.club/';

// Debug flags
const DEBUG_MODE = true;
const DEBUG_PATCH = '';

// Available patches
const AVAILABLE_PATCHES = [
    {
        version: '0.1',
        date: 'March 29, 2022'
    }/*,
    {
        version: '0.2',
        date: 'April 2, 2022'
    },
    {
        version: '0.2.1',
        date: 'April 18, 2022'
    },*/
].reverse();

// RomPatcher data variables
let romFile, patchFile, patch, tempFile, headerSize;

// Run when the window loads
window.onload = () => {
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
    document.getElementById('patcher-version-dropdown').innerHTML = versionOptions;

    // Unzipping library support
    let script = document.createElement('script');
    script.src = '../patcher/js/zip.js/inflate.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    // When a ROM file is selected
    document.getElementById('input-file-rom').addEventListener('change', function () {
        romFile = new MarcFile(this, _parseROM);

        let patchButton = document.getElementById('patcher-patch-button');
        patchButton.classList.remove('disabled');
        patchButton.disabled = false;
    });

    // When the Patch ROM button is pressed
    document.getElementById('patcher-patch-button').addEventListener("click", function () {
        let version = document.getElementById('patcher-version-dropdown').value;

        // Gets the file name
        parsePatchFile(getFileName(), version).then(arrayBuffer => {
            console.log(arrayBuffer);
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
        }).then(() => {
            applyPatch(patch, romFile, false);
        });
    });
}

function _parseROM() {
    if (romFile.readString(4).startsWith(ZIP_MAGIC)) {
        ZIPManager.parseFile(romFile);
    } else {
        if ((headerSize = canHaveFakeHeader(romFile))) {
        } else if ((headerSize = hasHeader(romFile))) {
        }
    }
}


// Gets the name of the file needed to be fetched to patch
function getFileName() {
    let opEdSubsConfig = document.querySelector('input[name="op-ed-subtitling"]:checked').value;
    let voicedLineConfig = document.querySelector('input[name="voice-lines-subtitling"]:checked').value;
    let version = document.getElementById('patcher-version-dropdown').value;

    // Possible file names: patch-(subbedoped|cleanoped)-(voicesubs|novoicesubs).xdelta
    return ('Chokuretsu-patch-v' + version + '-' + opEdSubsConfig + '-' + voicedLineConfig + '.xdelta');
}

// Returns the versioned patch file with the given name from the GitHub org
function parsePatchFile(fileName, version) {
    // Download from URL
    showNotice('info', 'Downloading patch...');

    let encodedUri;
    if (!DEBUG_MODE) {
        encodedUri = (CORS_PROXY + 'https://github.com/' + REPO_ORG + '/' + REPO + '/releases/' + version + '/download/' + fileName);
    } else {
        encodedUri = DEBUG_PATCH;
    }
    let fileUri = decodeURI(encodedUri.trim());
    return fetch(fileUri).then(result => result.arrayBuffer()) // Gets the response and returns it as a blob
        .then(arrayBuffer => {
            return arrayBuffer;
        }).catch(function (error) {
            console.error(error);
            showNotice('error', 'An error occurred downloading the patch file from GitHub: ' + error.message)
            return undefined;
        });
}

function applyPatch(patch, rom, validateChecksums) {
    console.log(patch);
    console.log(rom);
    if (patch && rom) {
        showNotice('info', 'Applying patch...');

        // Patch the rom
        try {
            patch.apply(rom, validateChecksums);
            preparePatchedRom(rom, patch.apply(rom, validateChecksums));
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
}

// Prepare the final patched ROM
function preparePatchedRom(originalRom, patchedRom) {
    patchedRom.fileName = originalRom.fileName.replace(/\.([^\\.]*?)$/, ' (patched).$1');
    patchedRom.fileType = originalRom.fileType;
    patchedRom.save();
    hideNotice();
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