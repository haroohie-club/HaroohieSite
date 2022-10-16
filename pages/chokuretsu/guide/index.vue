<template>
    <NuxtLayout>
        <ContentDoc v-slot="{doc}">
            <ContentRenderer :value="doc" />
            <ChokuretsuGuidePagination :doc="doc" />
        </ContentDoc>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu-guide'
})
</script>