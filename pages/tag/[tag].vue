<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
<template>
    <div>
        <NuxtLayout>
            <div id="tag-container">
                <h2>
                    <IconifiedText icon="fa6-solid:tag">{{ $t('latest-posts-tagged-with', { tag: $t(`${$route.params.tag.replace(' ', '-')}-tag`) }) }}</IconifiedText>
                </h2>
                <BlogTagStack :tag="$route.params.tag" />
                <ButtonLink :link="localePath('/')" color="red" icon="fa6-solid:house">{{ $t('back-to-home') }}</ButtonLink>
            </div>
        </NuxtLayout>
    </div>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Tag',
    layout: 'blog'
})
</script>