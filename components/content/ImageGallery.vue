<template>
    <div class="gallery">
        <img :src="image.url" :alt="image.alt" />
        <div class="buttons">
            <div class="image-button" @click="previousImage">
                <IconifiedText icon="fa6-solid:chevron-left">Previous</IconifiedText>
            </div>
            <div class="image-button" @click="nextImage">
                <IconifiedText icon="fa6-solid:chevron-right">Next</IconifiedText>
            </div>
        </div>
    </div>
</template>

<script setup>
const { images } = defineProps({
    images: {
        type: Array,
        required: true
    }
})

let currentImage = 0
const image = ref(images[currentImage])

function previousImage() {
    currentImage--
    if (currentImage < 0) {
        currentImage = images.length - 1
    }
    image.value = images[currentImage]
}

function nextImage() {
    currentImage++
    if (currentImage >= images.length) {
        currentImage = 0
    }
    image.value = images[currentImage]
}
</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
}
</style>
