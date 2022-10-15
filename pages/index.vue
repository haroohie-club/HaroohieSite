<template>
    <div id="home-page">
        <h2>Our Translations</h2>
        <div id="releases" class="box">
            <TranslationsGrid />
        </div>
        <div id="two-columns">
            <div id="socials" class="box">
                <h2>Links</h2>
                <SocialLinks top_link="/blog" top_icon="fa6-solid:paper-plane" top_text="News & Blog" />
            </div>
            <div id="blogs" class="box">
                <h2>From the Clubroom</h2>
                <ContentList path="/blog" v-slot="{ list }">
                    <BlogPreview v-for="blog in list" :key="blog._path" :blog="blog" />
                </ContentList>
            </div>
        </div>
    </div>
</template>

<style scoped>
#home-page {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
}

#two-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#two-columns #socials {
    width: 20%;
}

#two-columns #blogs {
    width: 75%;
}

.box {
    background-color: white;
    padding: 1.5rem;
    padding-right: 2rem;
    margin: 0.5rem;
}

.box h2 {
    margin-top: 0;
}
</style>

<script setup>
definePageMeta({
    title: 'Haroohie Translation Club',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
    layout: 'common'
})
</script>