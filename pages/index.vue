<template>
    <div id="index-page">
        <div id="content">
            <h2>Our Translations</h2>
            <div id="releases" class="box">
                <TranslationsGrid />
            </div>
            <h2>From The Clubroom</h2>
            <div id="two-column">
                <div id="socials">
                    <h3>Follow us</h3>
                </div>
                <div id="blogs">
                    <h3>Latest Blog Posts</h3>
                    <BlogList />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#index-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#two-column {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    width: 1032px;
}

#socials {
    width: 25%;
}

#blogs {
    width: 75%;
}

#content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 1000px;
}

#releases {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.box {
    background-color: white;
    border-radius: 0.5rem;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
}
</style>

<script>
definePageMeta({
    title: 'Haroohie Translation Club',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
    layout: 'common'
})
</script>