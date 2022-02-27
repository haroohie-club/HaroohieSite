// Fetches the device
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let device = params.device;

// Ensures device param carries over between browsing guide pages
window.addEventListener('load', function(event){
    if (device != null) {
        let elements = document.getElementsByTagName('a');
        for(let i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('exclude-device-href')) {
                continue; // Exclude certain links from this
            }
            elements[i].href += '?device=' + device;
        }
    }
})