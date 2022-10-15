<template>
    <div class="blog-preview">
        <div class="blog-image" v-if="blog.navigation.image">
            <NuxtLink :to="blog._path">
                <img :src="'/images/blog/' + blog.navigation.image" />    
            </NuxtLink>
        </div>
        <div class="blog-body">
            <div class="title">
                <NuxtLink :to="blog._path">{{ blog.navigation.title }}</NuxtLink>
            </div>
            <div class="data">
                <i class="meta">Written by {{ blog.navigation.author }} ({{ blog.navigation.publishedAt }})</i>
                <div class="tags">
                    <IconifiedText icon="fa6-solid:tag" />
                    <span class="tag" v-for="tag of blog.navigation.tags">{{ tag }}</span>
                </div>
            </div>
            <div class="description">{{ blog.description }} <NuxtLink :to="blog._path">Read more&hellip;</NuxtLink></div>
        </div>

    </div>
</template>

<style scoped>
.blog-preview {
    display: flex;
    flex-direction: row;
}

.blog-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 1rem;
}

.blog-image img {
    max-width: 220px;
    max-height: 200px;
    height: auto;
}

.blog-image:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(1.025);
}

.blog-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.blog-body .title {
    font-size: 1.25rem;
    font-weight: bold;
}

.blog-body .title a {
    color: black;
}

.blog-body .data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.blog-body .description {
    margin-top: 1rem;
}
</style>

<script>
import IconifiedText from './IconifiedText.vue';
export default {
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    components: { IconifiedText }
}
</script>