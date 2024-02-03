<script setup>
const { locale } = useI18n()
</script>

<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/blog/${locale}`" />
        </NuxtLayout>
    </div>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Blog',
    layout: 'blog'
})
</script>