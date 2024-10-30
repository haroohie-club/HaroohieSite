<template>
    <div class="author-socials">
        <NuxtLink v-if="author.bluesky" :to="author.bluesky" rel="me">
            <IconifiedText icon="fa6-brands:bluesky">{{ $t('bluesky') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.twitter" :to="author.twitter" rel="me">
            <IconifiedText icon="fa6-brands:x-twitter">{{ $t('twitter') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.instagram" :to="author.instagram" rel="me">
            <IconifiedText icon="fa6-brands:instagram">{{ $t('instagram') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.threads" :to="author.threads" rel="me">
            <IconifiedText icon="fa6-brands:threads">{{ $t('threads') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.github" :to="author.github" rel="me">
            <IconifiedText icon="fa6-brands:github">{{ $t('github') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.mastodon" :to="author.mastodon" rel="me">
            <IconifiedText icon="fa6-brands:mastodon">{{ $t('mastodon') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.pixelfed" :to="author.pixelfed" rel="me">
            <IconifiedText icon="fa6-solid:camera">{{ $t('pixelfed') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.youtube" :to="author.youtube" rel="me">
            <IconifiedText icon="fa6-brands:youtube">{{ $t('youtube') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.bilibili" :to="author.bilibili" rel="me">
            <IconifiedText icon="fa6-brands:bilibili">{{ $t('bilibili') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.website" :to="author.website" rel="me">
            <IconifiedText icon="fa6-solid:up-right-from-square">{{ $t('website') }}</IconifiedText>
        </NuxtLink>
    </div>
</template>



<style scoped>
.author-socials {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>

<script>
export default {
    name: 'AuthorSocials',
    props: {
        author: {
            type: Object,
            required: true,
        }
    }
}
</script>