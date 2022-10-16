<template>
    <NuxtLayout>
        <div id="dual-column">
            <div class="content">
                <TitleGraphic graphic="chokuretsu/game-logo" />
                <div>
                    <ContentDoc />
                </div>
                <ClientOnly fallbackTag="span">
                    <RomPatcherUi />
                    <template #fallback>
                        <p>Loading...</p>
                    </template>
                </ClientOnly>
            </div>
            <div class="sidebar">
                <div id="sos-logo">
                    <object class="drop-shadow" data="/images/sos-logo.svg" type="image/svg+xml" width="100%" />
                </div>
                <div>
                    <ContentDoc path="/chokuretsu/patch-sidebar" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
#dual-column {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    justify-content: space-between;
}

#dual-column .content {
    width: 70%;
    padding: 1rem;
}

#dual-column .sidebar {
    width: 20%;
    padding: 1rem;
}

.sidebar #sos-logo {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    margin: auto;
}

.drop-shadow {
    filter: drop-shadow(0.2em 0.2em 0.1em rgba(0, 0, 0, 0.5));
}
</style>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya) - Patch ROM File',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya) ROM Patcher',
    layout: 'chokuretsu'
})
</script>