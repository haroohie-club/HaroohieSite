<template>
    <NuxtLink :to="friend.website" rel="me">
        <h1 id="friend">{{ friend.name }}</h1>
    </NuxtLink>
    <h3 v-if="friend.original">{{ friend.original }}</h3>
    <div class="friend-socials">
        <NuxtLink v-if="friend.bluesky" :to="friend.bluesky" rel="me">
            <IconifiedText icon="fa6-brands:bluesky">{{ $t('bluesky') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.discord" :to="friend.discord" rel="me">
            <IconifiedText icon="fa6-brands:discord">{{ $t('discord-server') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.twitter" :to="friend.twitter" rel="me">
            <IconifiedText icon="fa6-brands:x-twitter">{{ $t('twitter') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.instagram" :to="friend.instagram" rel="me">
            <IconifiedText icon="fa6-brands:instagram">{{ $t('instagram') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.threads" :to="friend.threads" rel="me">
            <IconifiedText icon="fa6-brands:threads">{{ $t('threads') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.github" :to="friend.github" rel="me">
            <IconifiedText icon="fa6-brands:github">{{ $t('github') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.mastodon" :to="friend.mastodon" rel="me">
            <IconifiedText icon="fa6-brands:mastodon">{{ $t('mastodon') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.pixelfed" :to="friend.pixelfed" rel="me">
            <IconifiedText icon="fa6-solid:camera">{{ $t('pixelfed') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.youtube" :to="friend.youtube" rel="me">
            <IconifiedText icon="fa6-brands:youtube">{{ $t('youtube') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.tumblr" :to="friend.tumblr" rel="me">
            <IconifiedText icon="fa6-brands:tumblr">{{ $t('tumblr') }}</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="friend.bilibili" :to="friend.bilibili" rel="me">
            <IconifiedText icon="fa6-brands:bilibili">{{ $t('bilibili') }}</IconifiedText>
        </NuxtLink>
    </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
.friend-socials {
    display:inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
</style>

<script>
export default {
    name: 'FriendView',
    props: {
        friend: {
            type: Object,
            required: true,
        }
    }
}
</script>