<template>
    <div v-for="link of blogs" :key="link._path">
        <NuxtLink :to="link._path">
            <div class="title">{{ link.navigation.title }}</div>
        </NuxtLink>
    </div>
</template>

<script setup>
const blogs = await queryContent('blog')
    .sort({ date: 1 })
    .where({ title: { $not: '' } })
    .find()
</script>