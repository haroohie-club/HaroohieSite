<template>
    <div>
        <NuxtLayout>
            <div id="author-container">
                <ContentDoc :path="`/author/${route.params.author}/${locale}`">
                    <template v-slot="{ doc }">
                        <div v-if="doc.author">
                            <Head>
                                <Title>{{ $t('index-title') }} - {{ doc.author.name }}</Title>
                            </Head>
                            <h1 id="author">{{ doc.author.name }}</h1>
                            <AuthorSocials :author="doc.author" />
                        </div>
                        <ContentRenderer :value="doc" />
                        <h2>{{ $t('latest-posts-by', { author: doc.author.name }) }}</h2>
                        <BlogAuthorStack :author="doc.author.name" />
                    </template>
                    <template #not-found>
                        <h1 id="author">{{ $t('author-not-found') }}</h1>
                        <p>{{ $('author-not-found-desc') }}</p>
                    </template>
                </ContentDoc>
                <ButtonLink :link="localePath('/')" color="red" icon="fa6-solid:house">{{ $t('back-to-home') }}</ButtonLink>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
const route = useRoute()

definePageMeta({
    layout: 'blog'
})
</script>