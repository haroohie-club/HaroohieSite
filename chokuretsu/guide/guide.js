// Fetches the device
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let device = params.device;
if (device != null) {
    alert(device);
}