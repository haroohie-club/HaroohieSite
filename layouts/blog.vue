<!-- Blog pages -->
<template>
    <div id="content-body">
        <div id="topbar">
            <div id="logo">
                <TitleGraphic graphic="club-logo" to="/" />
            </div>
        </div>
        <div id="blog-page">
            <div class="sidebar">
                <div class="links box">
                    <h2>Links</h2>
                    <div id="links">
                        <SocialLinks />
                    </div>
                    <h2>Blogs</h2>
                    <BlogList />
                </div>
            </div>
            <div class="blog">
                <div class="content box">
                    <article>
                        <slot />
                    </article>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    <ImageModal v-show="showModal" :imageSource="imageSource" @close-modal="showModal = false" />
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            imageSource: null,
        }
    },
    mounted() {
        window.addEventListener('click', function(event) {
            if (event.target.tagName == 'IMG') {
                this.imageSource = event.target.src;
                this.showModal = true;
            }
        }.bind(this));
    },
}
</script>

<style>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--main-light-gray);
    background-image: url('/images/haruhi-calisthenic.png');
    background-repeat: repeat;
    justify-content: center;
}

#topbar {
    margin: 0 auto;
    padding: 0;
}

#topbar #logo {
    max-width: 500px;
    width: 80vw;
    padding: 0.5rem;
}

#blog-page {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto;
}

.sidebar {
    display: flex;
    flex-direction: column;
    width: 20vw !important;
    margin-right: 0.5rem;
}

.blog {
    display: flex;
    flex-direction: column;
    width: 75vw !important;
    margin-left: 0.5rem;
}

.content {
    display: flex;
}

.box {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
    padding: 1rem;
}

article {
    display: flex;
    flex-direction: column;
    max-width: 100% !important;
}

/* Blog top */
.blog .header {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
}

.header .brigade-logo {
    display: flex;
    align-items: center;
    margin-right: 1rem;
}

.header .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info h1 {
    margin: 0;
    margin-bottom: 0.5rem;
}

.info .meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.info .meta .date {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.info .meta .tags {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.tags .tag {
    margin: 0 0.3rem;
    background-color: var(--main-light-gray);
    padding: 0.2rem 0.3rem;
    border-radius: 0.5rem;
}

.brigade-logo img {
    width: 100px !important;
    height: auto !important;
    box-shadow: none;
    border-radius: 0;
}

/* Smaller than 750px */
@media screen and (max-width: 850px) {
    .info .meta {
        flex-direction: column;
    }
}

@media screen and (max-width: 600px) {
    .header .brigade-logo {
        display: none;
    }
}

@media screen and (max-width: 850px) {
    #blog-page {
        flex-direction: column-reverse;
        justify-items: center;
    }

    .sidebar {
        width: 90vw !important;
        margin: 0.5rem 0;
    }

    .blog {
        width: 90vw !important;
        margin: 0.5rem 0;
    }
}
</style>

<style>
article img {
    width: 450px;
    max-width: 70vw;
    height: auto;
    box-shadow: var(--main-shadow);
    border-radius: 0.5rem;
}

article pre {
    display: block;
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    overflow: auto !important;
    position: relative !important;
}

article code {
    overflow: auto;
    word-break: normal;
    word-wrap: normal;
}

article blockquote {
    border-left: 0.5rem solid var(--main-light-gray);
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
}
</style>