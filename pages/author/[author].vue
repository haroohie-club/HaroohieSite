<template>
    <div class="box" id="container">
        <ContentDoc v-slot="{ doc }">
            <div v-if="doc.author">
                <h1 id="author">{{ doc.author.name }}</h1>
                <div id="social"><NuxtLink :to="doc.author.twitter">Twitter</NuxtLink></div>
            </div>
            <ContentRenderer :value="doc" />
            <h2>Latest posts</h2>
            <BlogAuthorStack :author="doc.author.name" />
        </ContentDoc>
    </div>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Author',
    layout: 'common'
})
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 80%;
    justify-content: center;
    margin: 0 auto
}

.box {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: var(--main-shadow);
}
</style>