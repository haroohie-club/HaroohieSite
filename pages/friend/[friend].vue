<template>
    <div>
        <NuxtLayout noBlogs="true">
            <div id="friend-container">
                <ContentDoc :path="`/friend/${route.params.friend}/${locale}`">
                        <template v-slot="{ doc }">
                            <div class="friend-centered">
                                <div v-if="doc.friend">
                                    <FriendView :friend="doc.friend" />
                                </div>
                                <ContentRenderer :value="doc" />
                            </div>
                        </template>
                        <template #not-found>
                            <h1 id="friend">{{ $t('friend-not-found') }}</h1>
                            <p>{{ $('friend-not-found-desc') }}</p>
                        </template>
                </ContentDoc>
                <ButtonLink :link="localePath('/')" color="red" icon="fa6-solid:house">{{ $t('back-to-home') }}</ButtonLink>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
    .friend-centered {
        margin: auto;
        text-align: center;
    }
</style>

<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
const route = useRoute()

useHead({
    titleTemplate: (friendTitle) => {
        return friendTitle ? `${friendTitle} - Haroohie Translation Club` : "Haroohie Translation Club";
    }
})

definePageMeta({
    layout: 'blog'
})
</script>