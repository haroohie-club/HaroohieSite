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
                    "title": "The Series of Haruhi Suzumiya",
                    "original": "Suzumiya Haruhi no Chokuretsu",
                    "logo": "chokuretsu/game-logo",
                    "tagline": "Solve the wonders of North High while keeping the SOS Brigade Leader in check!",
                    "description": "Enjoy 30,000+ lines of dialogue on your Nintendo DS system in this branching story puzzler!",
                    "page": "/chokuretsu",
                    "poster": "poster-chokuretsu-en.png",
                    "color": "red",
                    "screenshots": [
                        "chokuretsu/screenshots/haruhi.png",
                        "chokuretsu/screenshots/investigation.png",
                        "chokuretsu/screenshots/puzzle.png",
                        "chokuretsu/screenshots/top-screen.png"
                    ],
                    tags: ["Nintendo DS", "Puzzle", "20% Complete"]
                },
                {
                    "id": "heiretsu",
                    "title": "The Parallel of Haruhi Suzumiya",
                    "original": "Suzumiya Haruhi no Heiretsu",
                    "tagline": "Uncover the mystery aboard a cruise liner whose voyage seemingly has no end!",
                    "description": "Featuring full-3D environments and character graphics, can you solve the mystery in this time-looping adventure?",
                    "poster": "poster-heiretsu-en.png",
                    "screenshots": ["mystery.png"],
                    "color": "blue",
                    "tags": ["Wii", "Adventure", "Coming Soon"]
                },

            ]
        }
    }
}
</script>