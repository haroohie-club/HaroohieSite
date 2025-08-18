<script setup>
const route = useRoute()
const { data: blogs } = await useAsyncData(route.path, () => {
  return queryCollection(locale + '_blogs')
})
</script>

<template>
    <ContentRenderer v-if="blogs" :value="blogs">
        <div v-for="blog in blogs.slice(0, Math.min(blogs.length, limit))">
            <BlogPreview :key="blog.title" :blog="blog" />
        </div>
    </ContentRenderer>
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