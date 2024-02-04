<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>
<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog in list.filter(b => b.navigation).filter(b => b.locale == locale).filter(b => b.navigation.tags.includes(tag)).reverse().slice(0, Math.min(list.length, limit))">
            <BlogPreview v-if="blog.navigation" :key="blog.title" :blog="blog" />
        </div>
    </ContentList>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            required: false
        },
        limit: {
            type: Number,
            required: false,
            default: 100
        }
    }
}
</script>