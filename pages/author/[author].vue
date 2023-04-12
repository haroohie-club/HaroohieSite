<template>
    <NuxtLayout>
        <div id="author-container">
            <ContentDoc>
                <template v-slot="{ doc }">
                    <div v-if="doc.author">
                        <h1 id="author">{{ doc.author.name }}</h1>
                        <div id="social">
                            <NuxtLink v-if="doc.author.twitter" :to="doc.author.twitter">
                                <IconifiedText icon="fa6-brands:twitter">Twitter</IconifiedText>
                            </NuxtLink>
                            <NuxtLink v-if="doc.author.instagram" :to="doc.author.instagram">
                                <IconifiedText icon="fa6-brands:instagram">Instagram</IconifiedText>
                            </NuxtLink>
                            <NuxtLink v-if="doc.author.github" :to="doc.author.github">
                                <IconifiedText icon="fa6-brands:github">GitHub</IconifiedText>
                            </NuxtLink>
                            <NuxtLink v-if="doc.author.mastodon" :to="doc.author.mastodon" rel="me">
                                <IconifiedText icon="fa6-brands:mastodon">Mastodon</IconifiedText>
                            </NuxtLink>
                            <NuxtLink v-if="doc.author.youtube" :to="doc.author.youtube">
                                <IconifiedText icon="fa6-brands:youtube">YouTube</IconifiedText>
                            </NuxtLink>
                        </div>
                    </div>
                    <ContentRenderer :value="doc" />
                    <h2>Latest posts by {{ doc.author.name }}</h2>
                    <BlogAuthorStack :author="doc.author.name" />
                </template>
                <template #not-found>
                    <h1 id="author">Author not found</h1>
                    <p>Could not find information for this author.</p>
                </template>
            </ContentDoc>
            <ButtonLink link="/" color="red" icon="fa6-solid:house">Back to Home</ButtonLink>
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Author',
    layout: 'blog'
})
</script>

<style scoped>
#social {
    display: row;
    flex-direction: column;
}

#social a {
    margin-right: 0.5rem;
}
</style>