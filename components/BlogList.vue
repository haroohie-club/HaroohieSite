<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog of list" class="blog-link">
            <NuxtLink v-if="blog.navigation" :to="blog._path">{{ blog.navigation.title }}</NuxtLink>
        </div>
    </ContentList>
</template>

<style scoped>

.blog-link {
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>