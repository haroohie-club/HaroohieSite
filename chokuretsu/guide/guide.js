// Fetches the device
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let device = params.device;

window.addEventListener('load', function(event){
    if (device != null) {

        // Ensures device param carries over between browsing guide pages
        let links = document.getElementsByTagName('a');
        for(let i = 0; i < links.length; i++) {
            if (links[i].classList.contains('exclude-device-href')) {
                continue; // Exclude certain links from this
            }
            links[i].href += '?device=' + device;
        }

        // Setup platform indicators
        let platformIndicators = document.getElementsByClassName('guide-platform-indicator');
        for(let i = 0; i < platformIndicators.length; i++) {
            platformIndicators[i].classList.remove('hidden');
            for (let j = 0; j < platformIndicators[i].children.length; j++) {
                if (platformIndicators[i].children[j].id === 'guide-platform-indicator-icon') {
                    switch (device) {
                        case 'ds':
                            platformIndicators[i].children[j].data = '../assets/ds-icon.svg'
                            break;
                        case 'dsi':
                            platformIndicators[i].children[j].data = '../assets/dsi-icon.svg'
                            break;
                        case '3ds':
                            platformIndicators[i].children[j].data = '../assets/3ds-icon.svg'
                            break;
                        case 'emu':
                            platformIndicators[i].children[j].data = '../assets/emulator-icon.svg'
                            break;
                        default:
                            platformIndicators[i].children[j].data = '../assets/unknown-device.svg'
                            break
                    }
                } else if (platformIndicators[i].children[j].id === 'guide-platform-indicator-text') {
                    switch (device) {
                        case 'ds':
                            platformIndicators[i].children[j].innerHTML = 'Nintendo DS'
                            break;
                        case 'dsi':
                            platformIndicators[i].children[j].innerHTML = 'Nintendo DSi'
                            break;
                        case '3ds':
                            platformIndicators[i].children[j].innerHTML = 'Nintendo 3DS'
                            break;
                        case 'emu':
                            platformIndicators[i].children[j].innerHTML = 'Emulator'
                            break;
                        default:
                            // For funny people who like to mess with URL parameters >:)
                            platformIndicators[i].children[j].innerHTML = '¯\\_(ツ)_/¯'
                            break
                    }
                }
            }
        }

        // Show platform-specific stuff
        let platformSpecificElements = document.getElementsByClassName(device + '-show');
        for(let i = 0; i < platformSpecificElements.length; i++) {
            platformSpecificElements[i].classList.remove('hidden');
        }
    } else {
        if (document.getElementById('redirect-if-device-not-selected') != null) {
            window.location.replace('../guide/choose-platform.html')
        }
    }
})