<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
<template>
    <div class="social-buttons">
        <ButtonLink :link="localePath(top_link)" color="red" type="top-piece" :icon="top_icon" fullwidth>{{ top_text }}
        </ButtonLink>
        <ButtonLink link="https://discord.gg/nesRSbpeFM" rel="me" color="discord" type="mid-piece" icon="fa6-brands:discord"
            fullwidth>{{ $t('discord-server') }}</ButtonLink>
        <ButtonLink link="https://twitter.com/haroohie" rel="me" color="twitter" type="mid-piece" icon="fa6-brands:twitter"
            fullwidth>{{ $t('twitter') }}</ButtonLink>
        <ButtonLink link="https://bsky.app/profile/haroohie.club" rel="me" color="bluesky" type="mid-piece" icon="fa6-solid:cloud"
            fullwidth>{{ $t('bluesky') }}</ButtonLink>
        <ButtonLink link="https://instagram.com/haroohie" rel="me" color="instagram" type="mid-piece" icon="fa6-brands:instagram"
            fullwidth>{{ $t('instagram') }}</ButtonLink>
        <ButtonLink link="https://mastodon.online/@haroohie" rel="me" color="mastodon" type="mid-piece" icon="fa6-brands:mastodon"
            fullwidth>{{ $t('mastodon') }}</ButtonLink>
        <ButtonLink link="https://facebook.com/haroohie" rel="me" color="facebook" type="bottom-piece" icon="fa6-brands:facebook"
            fullwidth>{{ $t('facebook') }}</ButtonLink>
    </div>
</template>

<script>
export default {
    props: {
        top_link: {
            type: String,
            required: false,
            default: '/'
        },
        top_icon: {
            type: String,
            required: false,
            default: 'fa6-solid:house'
        },
        top_text: {
            type: String,
            required: false,
            default: $t('back-to-Home')
        }
    }
}
</script>

<style scoped>
.social-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>