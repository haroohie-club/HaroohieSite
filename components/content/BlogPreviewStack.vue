<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog in list.slice(0, Math.min(list.length, limit))">
            <BlogPreview v-if="blog.navigation" :key="blog._path" :blog="blog" />
        </div>
    </ContentList>
</template>

<script>
export default {
    props: {
        limit: {
            type: Number,
            required: false,
            default: 3
        }
    }
}
</script>