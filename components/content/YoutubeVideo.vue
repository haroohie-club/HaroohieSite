<template>
    <!-- Youtube video iframe -->
    <div class="youtube-video">
        <iframe
            id="ytplayer"
            :src="'https://www.youtube.com/embed/' + videoId + '?origin=' + $route.params.origin"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    props: {
        videoId: {
            type: String,
            required: true
        }
    }
}
</script>