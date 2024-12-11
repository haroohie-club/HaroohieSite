<template>
    <div v-if="notice" id="patcher-notice" v-html="$t(notice, noticeDict.value)"></div>
    <div class="patcher-menu">
        <div class="patcher-left">
            <h3 class="patcher-header">{{ $t('chokuretsu-rom-patcher-options') }}</h3>
            <table id="patcher-options">
                <tbody>
                    <RomPatcherOptionDescription :title="$t('chokuretsu-rom-patcher-dub-title')" img="/images/chokuretsu/opening-subtitles.png"
                        :alt="$t('chokuretsu-rom-patcher-dub-alt')" name="dub" :class="{ hidden: !getOptionVisibility('dub') }">
                        {{ $t('chokuretsu-rom-patcher-dub-desc') }}
                    </RomPatcherOptionDescription>
                    <RomPatcherOption optionName="dub" :option1="$t('chokuretsu-rom-patcher-dub-opt1')" option1value="dubbed" :option2="$t('chokuretsu-rom-patcher-dub-opt2')" option2value="nodub"
                        defaultOption="2" :select1Function="dubOn" :select2Function="dubOff" :class="{ hidden: !getOptionVisibility('dub') }"/>

                    <RomPatcherOptionDescription :title="$t('chokuretsu-rom-patcher-op-ed-subs-title')" img="/images/chokuretsu/opening-subtitles.png"
                        :alt="$t('chokuretsu-rom-patcher-op-ed-subs-alt')" name="op-ed-subtitling" :class="{ hidden: !getOptionVisibility('op-ed-subtitling') }">
                        {{ $t('chokuretsu-rom-patcher-op-ed-subs-desc') }}
                    </RomPatcherOptionDescription>
                    <RomPatcherOption optionName="op-ed-subtitling" :option1="$t('chokuretsu-rom-patcher-op-ed-subs-opt1')" option1value="subbedoped" :option2="$t('chokuretsu-rom-patcher-op-ed-subs-opt2')" option2value="cleanoped" recommendFirst 
                        :class="{ hidden: !getOptionVisibility('op-ed-subtitling') }"/>

                    <RomPatcherOptionDescription :title="$t('chokuretsu-rom-patcher-voice-subs-title')"
                        img="/images/chokuretsu/voiced-line-subtitles.png" :alt="$t('chokuretsu-rom-patcher-voice-subs-alt')" name="voice-lines-subtitling" :class="{ hidden: !getOptionVisibility('voice-lines-subtitling') }">
                        {{ $t('chokuretsu-rom-patcher-voice-subs-desc') }}
                    </RomPatcherOptionDescription>
                    <RomPatcherOption optionName="voice-lines-subtitling" :option1="$t('chokuretsu-rom-patcher-voice-subs-opt1')" option1value="voicesubs" :option2="$t('chokuretsu-rom-patcher-voice-subs-opt2')" option2value="novoicesubs" recommendFirst
                        :class="{ hidden: !getOptionVisibility('voice-lines-subtitling') }" />
                </tbody>
            </table>
        </div>
        <div class="patcher-right">
            <div>
                <h3 class="patcher-header">{{ $t('chokuretsu-rom-patcher-select-rom') }}</h3>
                <input id="input-file-rom" @change="selectFile" class="input-file enabled" type="file" accept=".nds"
                    ondragenter="this.classList.add('patcher-file-dragging');"
                    ondragleave="this.classList.remove('patcher-file-dragging');" />
            </div>
            <div>
                <h3 class="patcher-header">{{ $t('chokuretsu-rom-patcher-version-select') }}</h3>
                <div class="patcher-version-options">
                    <label>
                        <b>{{ $t('chokuretsu-rom-patcher-language') }}</b>
                        <select id="patcher-locale-dropdown" v-model="patchLocale">
                            <option v-for="pl in AVAILABLE_PATCH_LOCALES" :value="pl">{{ getLanguageName(locale, pl) }}</option>
                        </select>
                    </label>
                    <label>
                        <b>{{ $t('chokuretsu-rom-patcher-version') }}</b>
                        <select id="patcher-version-dropdown">
                            <option v-for="patch in AVAILABLE_PATCHES(patchLocale)" :value="`${patchLocale}-v${patch.version}`">
                                v{{ patch.version }} &mdash; {{ getLocalizedDate(locale, patch.year, patch.month, patch.day) }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="patcher-submit">
                    <ButtonLink link="#" color="red" icon="fa6-solid:file-import" @click="patchRom">{{ $t('chokuretsu-rom-patcher-patch-rom') }}</ButtonLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.patcher-menu {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, 48.5%);
    text-align: center;
    justify-content: center;
}

.patcher-header {
    text-align: left;
}

#patcher-options {
    text-align: left;
}

#patcher-notice {
    text-align: center;
    background-color: var(--main-light-gray);
    color: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.error-notice {
    background-color: var(--main-red) !important;
    color: white !important;
}

.warning-notice {
    background-color: orange !important;
    color: black !important;
}

.patcher-menu .patcher-left {
    display: flex;
    flex-direction: column;
}

.patcher-menu .patcher-right {
    display: flex;
    flex-direction: column;
}

.input-file {
    padding: 2em 2vw;
    border: #31343a dashed 0.2em;
    border-radius: 0.8em;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}


.input-file.enabled {
    cursor: pointer;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}

select {
    border: black solid 0.15em;
    border-radius: 0.3em;
    margin-left: 0.5rem;
    text-align: center;
}

.patcher-version-options {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1.5em 0;
}

.patcher-submit {
    margin-top: 1em;
}

.patcher-submit a:hover {
    cursor: pointer;
}

.hidden {
    visibility: collapse;
}

/* Less than 940px */
@media screen and (max-width: 940px) {
    .patcher-menu {
        grid-template-columns: repeat(auto-fill, 100%);
    }
}
</style>

<script>
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

// SHA of a known bad ROM dump
const BAD_ROM_SHA = '0B07B8E888268A3F99161B8F79A5C8DF44C187A41ACF59E5D8D3DBBFD919DF75' // ROM of a known bad dump

// Whether to repair bad ROM dumps with a patch
const FIX_BAD_ROM = true;
const REPAIR_PATCH = '/patches/chokuretsu-repair.xdelta'

var localeVal = ''
const notice = ref('chokuretsu-rom-patcher-get-started')
const noticeDict = {}

// Available patches
function AVAILABLE_PATCHES(locale) {
    localeVal = locale
    switch (locale) {
        case 'en':
            return [
                {
                    version: '0.2',
                    year: 2022,
                    month: 4,
                    day: 20,
                    options: ['op-ed-subtitling', 'voice-lines-subtitling'],
                },
                {
                    version: '0.4',
                    year: 2023,
                    month: 2,
                    day: 28,
                    options: ['op-ed-subtitling', 'voice-lines-subtitling'],
                },
                {
                    version: '0.6',
                    year: 2023,
                    month: 10,
                    day: 31,
                    options: ['op-ed-subtitling', 'voice-lines-subtitling'],
                },
            ].reverse();
        case 'zh-hans':
            return [
                {
                    version: '0.1',
                    year: 2024,
                    month: 2,
                    day: 2,
                    options: [],
                },
            ].reverse();
        default:
            return [];
    }
}

// Option functions (for reducing dub options)
function dubOn() {
    document.getElementById('op-ed-subtitling-desc-row').classList.add('hidden');
    document.getElementById('op-ed-subtitling-opt-row').classList.add('hidden');
}

function dubOff(){
    document.getElementById('op-ed-subtitling-desc-row').classList.remove('hidden');
    document.getElementById('op-ed-subtitling-opt-row').classList.remove('hidden');
}

// RomPatcher data variables
let romFile, patchFile, patch, headerSize, romSha, isBadRom, repairPatchFile, repairPatch;

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
            showNotice('error', 'chokuretsu-rom-patcher-sha-calc-failed');
            return '';
        });
}

// Gets the name of the file needed to be fetched to patch
function getFileName() {
    let dubConfig = document.querySelector('input[name="dub"]:checked').value;
    if (!getOptionVisibility(dubConfig) || dubConfig == 'nodub') {
        dubConfig = ''
    } else {
        dubConfig += '-'
    }
    let opEdSubsConfig = document.querySelector('input[name="op-ed-subtitling"]:checked').value;
    if (!getOptionVisibility(opEdSubsConfig) || dubConfig == 'dubbed') {
        opEdSubsConfig = ''
    } else {
        opEdSubsConfig += '-'
    }
    let voicedLineConfig = document.querySelector('input[name="voice-lines-subtitling"]:checked').value;
    if (!getOptionVisibility(voicedLineConfig)) {
        voicedLineConfig = ''
    } else {
        voicedLineConfig += '-'
    }

    let version = getSelectedVersion();
    let optionString = (dubConfig + opEdSubsConfig + voicedLineConfig);
    if (optionString.length > 0) {
        optionString = optionString.substring(0, optionString.length - 1)
    }

    // Possible file names: patch-(subbedoped|cleanoped)-(voicesubs|novoicesubs).xdelta
    return ('chokuretsu-patch-' + version + '-' + optionString + '.xdelta');
}

// Returns the versioned patch file with the given name from the GitHub org
function parsePatchFile(fileName, version) {
    showNotice('info', 'chokuretsu-rom-patcher-downloading-patch');

    // Download from GitHub
    let encodedUri;
    if (!DEBUG_MODE) {
        encodedUri = (CORS_PROXY + 'https://github.com/' + REPO_ORG + '/' + REPO + '/releases/download/' + version + '/' + fileName);
    } else {
        encodedUri = DEBUG_PATCH;
    }
    return fetchFile(encodedUri);
}

function parseRepairFile() {
    showNotice('info', 'chokuretsu-rom-patcher-bad-rom');
    return fetchFile(REPAIR_PATCH);
}

function fetchFile(encodedUri) {
    let fileUri = decodeURI(encodedUri.trim());
    return fetch(fileUri).then(result => result.arrayBuffer()) // Gets the response and returns it as a blob
        .then(arrayBuffer => {
            return arrayBuffer;
        }).catch(function (error) {
            console.error(error);
            showNotice('error', 'chokuretsu-rom-patcher-fetch-error' + error.message)
            return undefined;
        });
}

function applyPatch(patch, rom, validateChecksums, name) {
    if (patch && rom) {
        showNotice('info', 'chokuretsu-rom-patcher-applying-patch');

        // Patch the rom
        try {
            patch.apply(rom, validateChecksums);
            return preparePatchedRom(rom, patch.apply(rom, validateChecksums), name);
        } catch (error) {
            console.error(error);
            showNotice('error', 'chokuretsu-rom-patcher-patch-error' + error.message);
        }

    } else {
        if (patch === undefined) {
            showNotice('error', 'chokuretsu-rom-patcher-patch-failed-retrieve');
        } else {
            showNotice('error', 'chokuretsu-rom-patcher-choose-rom-first');
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
        showNotice('info', 'chokuretsu-rom-patcher-bad-rom-warn')
    } else {
        showNotice('info', 'chokuretsu-rom-patcher-success')
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
function showNotice(noticeType, noticeMessage, noticeVals = {}) {
    let patcherElement = document.getElementById('patcher-notice');
    notice.value = noticeMessage;
    noticeDict.value = noticeVals;
    console.log(noticeDict)
    patcherElement.classList = noticeType + '-notice';
}

// Returns the selected version
function getSelectedVersion() {
    return document.getElementById('patcher-version-dropdown').value;
}

export default {
    methods: {
        patchRom: function () {
            let version = getSelectedVersion();
            
            // if a rom file has not been selected, return with an error
            if (!romFile) {
                showNotice('error', 'chokuretsu-rom-patcher-choose-rom-first');
                return;
            }

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
                            throw ('chokuretsu-rom-patcher-sha-calc-failed');
                        }
                        if (romSha === BAD_ROM_SHA) {
                            isBadRom = true;
                            if (!FIX_BAD_ROM) {
                                throw ('chokuretsu-rom-patcher-bad-rom-error');
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
                                    showNotice('info', 'chokuretsu-rom-patcher-repair');
                                    return applyPatch(repairPatch, romFile, false, 'repaired');
                                }).then(repairedRom => {
                                    romFile = repairedRom;
                                    showNotice('info', 'chokuretsu-rom-patcher-repair-applied')
                                }).catch((error) => {
                                    showNotice('error', 'chokuretsu-rom-patcher-repair-error' + error);
                                });

                                await REPAIR_ROM;
                            }
                        } else {
                            throw ('chokuretsu-rom-patcher-invalid-rom');
                        }
                    }
                }
            }).then(() => {
                showNotice('info', 'chokuretsu-rom-patcher-patching-rom', { patch: getFileName() })
                return applyPatch(patch, romFile, false, version);
            }).then(patchFile => {
                saveRomFile(patchFile);
            }).catch((error) => {
                showNotice('error', error);
            });
        },
        selectFile: async function (event) {
            try {
                romFile = new MarcFile(event.target, _parseROM);
            } catch (error) {
                showNotice('error', 'chokuretsu-rom-patcher-invalid-rom-select')
                return;
            }
        },
        getOptionVisibility: function (opt) {
            let locale = document.getElementById('patcher-locale-dropdown')?.value;
            if (locale == null) {
                locale = this.$i18n.locale;
                if (AVAILABLE_PATCHES(locale).length == 0) {
                    locale = 'en';
                }
            }
            let versionDropdown = document.getElementById('patcher-version-dropdown');
            let patch = AVAILABLE_PATCHES(locale)[versionDropdown?.selectedIndex ?? 0];

            return patch.options.indexOf(opt) >= 0;
        }
    }
}
</script>

<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const { availableLocales } = useI18n()
const AVAILABLE_PATCH_LOCALES = availableLocales.filter(locale => AVAILABLE_PATCHES(locale).length > 0);
const patchLocale = AVAILABLE_PATCH_LOCALES.indexOf(locale.value) < 0 ? ref('en') : ref(locale.value)
if (AVAILABLE_PATCHES(patchLocale.value).length === 0) {
    notice.value = 'chokuretsu-rom-patcher-no-patches-available'
}

// Resolve libraries
const LIBRARIES = ['/patcher/js/MarcFile.js', '/patcher/js/zip.js/inflate.js', '/patcher/js/crc.js',
'/patcher/js/formats/vcdiff.js', '/patcher/js/formats/zip.js', '/save-as/save-as.js'];
for (let i = 0; i < LIBRARIES.length; i++) {
    let script = document.createElement('script');
    script.src = LIBRARIES[i];
    script.type = 'text/javascript';
    document.head.appendChild(script);
}

function getLanguageName(loc, languageCode) {
    const nameGenerator = new Intl.DisplayNames(loc, { type: 'language' });
    const displayName = nameGenerator.of(languageCode);
    return displayName[0].toUpperCase() + displayName.substring(1);
}

function getLocalizedDate(loc, year, month, day) {
    let regionLoc = ''
    switch (loc) {
        case 'en':
            regionLoc = 'en-US';
            break;
        default:
            regionLoc = loc;
            break;
    }
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    return new Intl.DateTimeFormat(regionLoc, options).format(new Date(year, month - 1, day));
}
</script>