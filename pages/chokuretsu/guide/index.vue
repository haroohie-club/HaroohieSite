<template>
    <NuxtLayout>
        <ContentDoc v-slot="{doc}">
            <ContentRenderer :value="doc" />
            <ChokuretsuGuidePagination :doc="doc" />
        </ContentDoc>
        <template #sidebar>
            <div id="nagato-book">
                <img src="/images/chokuretsu/nagato-book.png" alt="Chibi Nagato pixel art of her reading a book." />
            </div>
            <ContentDoc path="chokuretsu/guide/sidebar" />
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
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu-guide'
})
</script>