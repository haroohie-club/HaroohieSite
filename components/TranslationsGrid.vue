<template>
    <div id="translations-grid">
        <TranslationPoster v-for="translation of translations" :key="translation.id" :translation="translation" />
    </div>
</template>

<style scoped>
#translations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
}

/* Less than 580px */
@media screen and (max-width: 650px) {
    #translations-grid {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}
</style>

<script>
export default {
    data() {
        return {
            translations: [
                {
                    "id": "chokuretsu",
                    "title": "chokuretsu-title",
                    "original": "Suzumiya Haruhi no Chokuretsu",
                    "logo": "chokuretsu/game-logo",
                    "tagline": "chokuretsu-tagline",
                    "description": "chokuretsu-description",
                    "page": "/chokuretsu",
                    "poster": "chokuretsu-poster",
                    "color": "red",
                    "screenshots": [
                        "chokuretsu/screenshots/haruhi.png",
                        "chokuretsu/screenshots/investigation.png",
                        "chokuretsu/screenshots/puzzle.png",
                        "chokuretsu/screenshots/top-screen.png"
                    ],
                    tags: ["Nintendo DS", "[chokuretsu-puzzle]", "[chokuretsu-completion]"]
                },
                {
                    "id": "heiretsu",
                    "title": "heiretsu-title",
                    "original": "Suzumiya Haruhi no Heiretsu",
                    "tagline": "heiretsu-tagline",
                    "description": "heiretsu-description",
                    "poster": "heiretsu-poster",
                    "screenshots": ["mystery.png"],
                    "color": "blue",
                    "tags": ["Wii", "[heiretsu-adventure]", "[heiretsu-completion]"]
                },

            ]
        }
    }
}
</script>