<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog in list.filter(b => b.navigation).filter(b => b.navigation.author === author).reverse()">
            <BlogPreview v-if="blog.navigation" :key="blog.navigation.publishedAt" :blog="blog" />
        </div>
    </ContentList>
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            required: false
        }
    }
}
</script>