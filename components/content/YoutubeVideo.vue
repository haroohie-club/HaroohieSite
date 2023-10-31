<template>
    <!-- Youtube video iframe -->
    <div class="youtube-video">
        <iframe width="560" height="315" id="ytplayer"
            :src="`https://www.youtube.com/embed/${video}`" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
    video: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.youtube-video {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}
</style>