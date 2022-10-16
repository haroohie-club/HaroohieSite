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
                <span class="meta">Written by <NuxtLink :to="'/author/' + blog.navigation.author.toLowerCase()">{{ blog.navigation.author }}</NuxtLink> ({{ publishedAt(blog.navigation.year, blog.navigation.month, blog.navigation.day) }})</span>
                <div class="tags">
                    <IconifiedText icon="fa6-solid:tag" />
                    <span class="tag" v-for="tag of blog.navigation.tags"><NuxtLink :to="'/tag/' + tag">{{ tag }}</NuxtLink></span>
                </div>
            </div>
            <div class="description">{{ ((blog.description.length > 330) ? blog.description.slice(0, 329) + '&hellip;' : blog.description) }}</div>
        </div>

    </div>
</template>

<style scoped>
.blog-preview {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
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
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
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

.blog-body .data .tags .tag {
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.1rem 0.25rem;
    margin: 0 0.2rem;
}

.blog-body .description {
    margin-top: 1rem;
}

/* Less than 580px */
@media screen and (max-width: 36rem) {
    .blog-preview {
        flex-direction: column;
    }

    .blog-image {
        margin-top: 0;
        margin-right: 0;
    }
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
    components: { IconifiedText },
    methods: {
        publishedAt(year, month, day) {
            return day + " " + getMonth(month) + " " + year;
        }
    }
}

function getMonth(month) {
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
    }
}
</script>