const COUNTER_GET_URL = 'https://api.countapi.xyz/get/haroohie.club/downloads/'

fetch(COUNTER_GET_URL).then(result => {
    return result.json()
}).then(jsonResult => {
    let downloadCount = jsonResult.value.toString();
    while (downloadCount.length < 5) {
        downloadCount = '0' + downloadCount;
    }
    document.getElementById('download-count').innerHTML = downloadCount;
});
