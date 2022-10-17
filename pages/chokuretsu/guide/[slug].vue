<template>
    <NuxtLayout>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
                <ChokuretsuGuidePagination :doc="doc" />
            </template>
            <template #not-found>
                <h1>Invalid guide page</h1>
                <p>Could not find a guide page at this address.</p>
                <ButtonLink link="/chokuretsu/guide" color="red" icon="fa6-solid:book">Back to Start
                </ButtonLink>
            </template>
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
    title: 'Suzumiya Haruhi no Chokuretsu - Setup Guide',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu-guide'
})
</script>