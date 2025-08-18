<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/blog/${locale}`" />
        </NuxtLayout>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'blog'
})
</script>