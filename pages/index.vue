<template>
    <div id="home-page">
        <div class="top">
            <div class="releases box">
                <h2>Our Translations</h2>
                <TranslationsGrid />
            </div>
        </div>
        <div class="newsfeed">
            <div class="socials box">
                <h2>Links</h2>
                <SocialLinks top_link="/blog" top_icon="fa6-solid:paper-plane" top_text="News & Blog" />
            </div>
            <div class="blogs box">
                <h2>From the Clubroom</h2>
                <BlogPreviewStack />
            </div>
        </div>
    </div>
</template>

<style scoped>
#home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

#home-page .box {
    margin: 0.5rem;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: var(--main-shadow);
}

#home-page .translations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#home-page .top {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    width: 100%;
}

#home-page .releases {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#home-page .newsfeed {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#home-page .socials {
    min-width: 250px;
}

h2 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Less than 850px */
@media screen and (max-width: 850px) {
    #home-page .newsfeed {
        flex-direction: column-reverse;
    }
}
</style>

<script setup>
definePageMeta({
    title: 'Haroohie Translation Club',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
    layout: 'common'
})
</script>