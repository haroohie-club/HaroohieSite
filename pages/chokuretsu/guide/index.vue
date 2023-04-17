<template>
    <NuxtLayout>
        <ContentDoc v-slot="{doc}">
            <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
            <ChokuretsuGuidePagination :doc="doc" />
        </ContentDoc>
        <template #sidebar>
            <div id="nagato-book">
                <img src="/images/chokuretsu/nagato-book.png" alt="Chibi Nagato pixel art of her reading a book." />
            </div>
            <ContentDoc path="chokuretsu/guide/sidebar" :head="false" />
        </template>
    </NuxtLayout>
</template>

<style scoped>
#nagato-book {
    display: flex;
    justify-content: center;
    width: 100%;
}

#nagato-book img {
    max-width: 80px;
}
</style>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - Setup Guide',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu-guide'
})
</script>