<script setup>
const { locale } = useI18n()
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/chokuretsu/patch/${locale}`" />
            <ClientOnly fallbackTag="span">
                <RomPatcherUi />
                <template #fallback>
                    <p>{{ $t('chokuretsu-patch-loading') }}</p>
                </template>
            </ClientOnly>
            <template #sidebar>
                <div id="haruhi-walk">
                    <img src="/images/chokuretsu/haruhi-walk.png" :alt="$t('chokuretsu-chibi-haruhi-alt')" />
                </div>
                <ContentDoc :path="`/chokuretsu/patch/sidebar/${locale}`" :head="false" />
            </template>
        </NuxtLayout>
    </div>
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

#haruhi-walk {
    display: flex;
    justify-content: center;
    width: 100%;
}

#haruhi-walk img {
    max-width: 80px;
}
</style>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya) - Patch ROM File',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya) ROM Patcher',
    layout: 'chokuretsu-guide'
})
</script>