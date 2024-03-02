<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/blog/${locale}`" />
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale, t } = useI18n({
  useScope: 'local'
})

definePageMeta({
    layout: 'blog'
})
</script>