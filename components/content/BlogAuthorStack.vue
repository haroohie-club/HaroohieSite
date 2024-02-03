<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>
<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog in list.filter(b => b.navigation).filter(b => b.locale == locale).filter(b => b.navigation.author === author).reverse()">
            <BlogPreview v-if="blog.navigation" :key="blog.title" :blog="blog" />
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