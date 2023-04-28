<template>
    <div class="footer-downloads">
        Downloads: <span id="download-count">{{ downloads }}</span>
    </div>
</template>

<style scoped>
.footer-downloads {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
}

.footer-downloads #download-count {
    background-color: black;
    color: white;
    font-family: 'Consolas', monospace;
    padding: 0.2em;
    margin-left: 0.5em;
}
</style>

<script setup>
const { url } = defineProps({
    url: {
        type: String,
        required: false,
        default: 'https://api.countapi.xyz/get/haroohie.club/downloads/'
    }
})

const downloads = await fetch(url).then(result => {
    if (!result.ok) {
        throw new Error('Failed to fetch download count.')
    }
    return result.json()
}).then(jsonResult => {
    let downloadCount = jsonResult.value.toString();
    while (downloadCount.length < 5) {
        downloadCount = '0' + downloadCount;
    }
    return downloadCount;
}).catch(error => {
    console.error(error);
    return '?????';
})
</script>