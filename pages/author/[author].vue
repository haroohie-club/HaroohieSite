<template>
    <NuxtLayout>
        <div id="author-container">
            <ContentDoc>
                <template v-slot="{ doc }">
                    <div v-if="doc.author">
                        <h1 id="author">{{ doc.author.name }}</h1>
                        <AuthorSocials :author="doc.author" />
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