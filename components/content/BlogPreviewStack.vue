<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>
<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog in list.filter(b => b.navigation).filter(b => b.locale == locale).reverse().slice(0, Math.min(list.length, limit))">
            <BlogPreview :key="blog.title" :blog="blog" />
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