<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div v-for="blog of list">
            <NuxtLink v-if="blog.navigation" :to="blog._path">{{ blog.navigation.title }}</NuxtLink>
        </div>
    </ContentList>
</template>