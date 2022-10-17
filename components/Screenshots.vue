<template>
    <div class="gallery" @click="galleryClick(id)">
        <img v-for="screenshot of screenshots" :src="'/images/' + screenshot"
                    :class="id + ' screenshot no-' + screenshots.indexOf(screenshot)" />
    </div>
</template>

<style scoped>
.gallery {
    max-width: 200px;
    max-height: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--main-shadow);
}

.gallery img {
    max-width: 200px;
    max-height: 200px;
}

.gallery:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(1.025);
}

.screenshot {
    display: none;
}

.no-0 {
    display: block;
}
</style>

<script>
let selectedScreenshots = [];

export default {
    props: {
        screenshots: {
            type: Array,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        galleryClick: function (id) {
            if (!selectedScreenshots[id]) {
                selectedScreenshots[id] = 0;
            }
            let screenshots = document.getElementsByClassName(`${id} screenshot no-${selectedScreenshots[id]}`);
            for (let screenshot of screenshots) {
                screenshot.style.display = "none";
            }
            selectedScreenshots[id] = (selectedScreenshots[id] + 1) % this.screenshots.length;
            screenshots = document.getElementsByClassName(`${id} screenshot no-${selectedScreenshots[id]}`);
            for (let screenshot of screenshots) {
                screenshot.style.display = "block";
            }
        }
    }
}
</script>