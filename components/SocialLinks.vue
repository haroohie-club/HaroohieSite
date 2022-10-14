<template>
    <div class="social-buttons">
        <ButtonLink :link="top_link" color="red" type="top-piece" :icon="top_icon" fullwidth>{{ top_text }}
        </ButtonLink>
        <ButtonLink link="https://discord.gg/nesRSbpeFM" color="discord" type="mid-piece" icon="fa6-brands:discord"
            fullwidth>Join our
            Discord!</ButtonLink>
        <ButtonLink link="https://twitter.com/haroohie" color="twitter" type="bottom-piece" icon="fa6-brands:twitter"
            fullwidth>Follow on
            Twitter!</ButtonLink>
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
            required: true,
            default: 'fa6-solid:house'
        },
        top_text: {
            type: String,
            required: true,
            default: 'Back Home'
        }
    }
}
</script>

<style scoped>
.social-buttons {
    display: flex;
    flex-direction: column;
}
</style>