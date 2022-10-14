<template>
    <div id="translations-grid">
        <Translation v-for="translation of translations" :key="translation.id" :translation="translation" />
    </div>
</template>

<style scoped>
#translations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
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
                    "patcher": "/chokuretsu/patch",
                    "screenshots": [
                        "chokuretsu/screenshots/haruhi.png",
                        "chokuretsu/screenshots/investigation.png",
                        "chokuretsu/screenshots/puzzle.png",
                        "chokuretsu/screenshots/top-screen.png"
                    ],
                    tags: [
                        {
                            "icon": "fa6-solid:gamepad",
                            "text": "Nintendo DS"
                        },
                        {
                            "icon": "fa6-solid:calendar",
                            "text": "Spring 2009"
                        },
                        {
                            "icon": "fa6-solid:hourglass",
                            "text": "20% Complete"
                        }
                    ]
                },
                {
                    "id": "coming-soon",
                    "title": "More coming soon!",
                    "original": "Coming Soon!",
                    "tagline": "Coming soon!",
                    "description": "If you'd like to help us on our mission to translate the Haruhi Suzumiya games, please join our Discord server and let us know!",
                    "screenshots": [
                        "mystery.png"
                    ]
                }
            ]
        }
    }
}
</script>