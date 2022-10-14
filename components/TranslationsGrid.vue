<template>
    <div id="translations-grid">
        <Translation v-for="translation of translations" :key="translation.id" :id="translation.id" :name="translation.title"
            :description="translation.description" :screenshots="translation.screenshots" :link="translation.page" 
            :tags="translation.tags" />
    </div>
</template>

<style scoped>
#translations-grid {
    display: grid;
    /* Two per row, 1rem gap */
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
                    "description": "A 2009 visual-novel puzzle adventure for the DS! Solve the wonders of North High while keeping the SOS Brigade Leader in check. Enjoy 30,000+ lines of dialogue across a branching story!",
                    "page": "/chokuretsu",
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
                            "text": "2009"
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