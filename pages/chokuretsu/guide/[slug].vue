<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`chokuretsu/guide/${route.params.slug}/${locale}`">
                <template v-slot="{ doc }">
                    <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                    <ChokuretsuGuidePagination :doc="doc" />
                </template>
                <template #not-found>
                    <h1>{{ $t('chokuretsu-guide-invalid-page') }}</h1>
                    <p>{{ $t('chokuretsu-guide-invalid-page-p') }}</p>
                    <ButtonLink :link="localePath('/chokuretsu/guide')" color="red" icon="fa6-solid:book">{{ $t('chokuretsu-guide-back-to-start') }}
                    </ButtonLink>
                </template>
            </ContentDoc>
            <template #sidebar>
                <div id="nagato-book">
                    <img src="/images/chokuretsu/nagato-book.png" :alt="$t('chokuretsu-chibi-nagato-alt')" />
                </div>
                <ContentDoc :path="`chokuretsu/guide/sidebar/${locale}`" :head="false" />
            </template>
        </NuxtLayout>
    </div>
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