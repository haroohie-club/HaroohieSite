<template>
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
</style>

<style>

h1, h2 {
    font-size: 1.5em;
    text-decoration: none;
    width: 100%;
    border-bottom: 0.08em solid var(--main-red);
}

h1 {
    margin-left: 5%;
}

</style>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya)',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu'
})
</script>