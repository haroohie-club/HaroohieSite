<template>
    <div id="translation">
        <div id="card">
            <div id="screenshots-gallery" @click="galleryClick(id)">
                <img v-for="screenshot of screenshots" :src="'/images/' + screenshot"
                    :class="id + ' screenshot no-' + screenshots.indexOf(screenshot)" />
            </div>
            <div id="details">
                <h3>{{ name }}</h3>
                <p> {{ description }}</p>
            </div>
        </div>
        <div id="links" v-if="link || tags">
            <div id="button">
                <ButtonLink v-if="link" :link="link" color="blue" icon="fa6-solid:chevron-right">Get Patch</ButtonLink>
            </div>
            <div id="tags">
                <div class="tag" v-for="tag of tags">
                    <IconifiedText :icon="tag.icon">{{ tag.text }}</IconifiedText>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#translation {
    display: flex;
    flex-direction: column;
}

#card {
    display: flex;
    padding: 0.35rem;
}

#links {
    display: flex;
    flex-direction: row;
    padding: 0.35rem;
}

#links #button {
    width: 39%;
}

#links #tags {
    width: 61%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

#screenshots-gallery {
    display: flex;
    align-items: center;
    justify-content: center;
}

#screenshots-gallery img {
    max-height: 130px;
    width: auto;
}

#screenshots-gallery:hover {
    cursor: pointer;
    filter: brightness(0.9);

    /* Slightly magnify */
    transform: scale(1.025);
}

.screenshot {
    display: none;
}

.no-0 {
    display: block;
}

#details {
    padding: 1rem;
    padding-bottom: 0;
}

#details p {
    margin-bottom: 0;
}
</style>

<script>
import IconifiedText from './content/IconifiedText.vue';
import ButtonLink from './content/ButtonLink.vue';
let selectedScreenshots = [];

export default {
    props: {
        id: String,
        name: String,
        description: String,
        link: String,
        tags: Array,
        screenshots: Array
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
    },
    components: { IconifiedText, IconifiedText, ButtonLink, IconifiedText }
}


</script>