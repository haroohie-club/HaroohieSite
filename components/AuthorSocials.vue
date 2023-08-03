<template>
    <div class="author-socials">
        <NuxtLink v-if="author.twitter" :to="author.twitter" rel="me">
            <IconifiedText icon="fa6-brands:twitter">Twitter</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.bluesky" :to="author.bluesky" rel="me">
            <IconifiedText icon="fa6-solid:cloud">Bluesky</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.instagram" :to="author.instagram" rel="me">
            <IconifiedText icon="fa6-brands:instagram">Instagram</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.github" :to="author.github" rel="me">
            <IconifiedText icon="fa6-brands:github">GitHub</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.mastodon" :to="author.mastodon" rel="me">
            <IconifiedText icon="fa6-brands:mastodon">Mastodon</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.youtube" :to="author.youtube" rel="me">
            <IconifiedText icon="fa6-brands:youtube">YouTube</IconifiedText>
        </NuxtLink>
        <NuxtLink v-if="author.website" :to="author.website" rel="me">
            <IconifiedText icon="fa6-solid:up-right-from-square">Website</IconifiedText>
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