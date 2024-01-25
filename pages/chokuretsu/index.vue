<template>
    <div>
        <NuxtLayout>
            <div id="dual-columns">
                <div class="column">
                    <DualSuzumiya video="chokuretsu-trailer-ep1.mp4" />
                    <div id="project-credits">
                        <ContentDoc path="/chokuretsu/credits" />
                    </div>
                </div>
                <div class="column">
                    <TitleGraphic graphic="chokuretsu/game-logo" />
                    <div id="project-info">
                        <ContentDoc />
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
#dual-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
}

.column {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

/* Less than 1200px */
@media screen and (max-width: 1200px) {
    #dual-columns {
        flex-direction: column-reverse;
    }

    .column {
        width: 95vw;
    }
}

/* Less than 680px */
@media screen and (max-width: 680px) {
    .ds {
        display: none;
    }

    .column {
        width: 90vw;
    }
}

/* Less than 580px */
@media screen and (max-width: 580px) {
    .column {
        width: 85vw;
    }
}
</style>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya)',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu'
})
</script>