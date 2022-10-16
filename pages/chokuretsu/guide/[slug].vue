<template>
    <NuxtLayout>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1 v-if="doc.navigation"> {{ doc.navigation.title }}</h1>
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
    </NuxtLayout>
</template>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya)',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya)',
    layout: 'chokuretsu-guide'
})
</script>