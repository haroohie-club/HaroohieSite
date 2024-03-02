<!-- Blog pages -->
<template>
    <div>
        <NuxtLayout name="default">
            <div id="blog-page">
                <div class="sidebar">
                    <div class="box">
                        <h2>{{ $t('social-links') }}</h2>
                        <SocialLinks type="stack"
                            :stack-topper="{ link: '/', icon: 'fa6-solid:house', locale: 'back-to-home' }" />
                        <h2>{{ $t('blogs') }}</h2>
                        <BlogList />
                        <h2>{{ $t('projects') }}</h2>
                        <ButtonLink :link="localePath('/chokuretsu')" type="top-piece" fullwidth color="red"
                            icon="fa6-solid:language">{{ $t('chokuretsu') }}</ButtonLink>
                        <ButtonLink :link="localePath('/chokuretsu/serial-loops')" type="bottom-piece" fullwidth
                            color="sl-blue" icon="fa6-solid:gear">{{ $t('serial-loops') }}</ButtonLink>
                    </div>
                </div>
                <div class="blog">
                    <div class="box">
                        <article>
                            <slot />
                        </article>
                    </div>
                    <ImageModal v-show="showModal" :imageSource="imageSource" @close-modal="showModal = false" />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const showModal = ref(false)
const imageSource = ref(null)

onMounted(() => {
    window.addEventListener('click', function (event) {
        if (event.target.tagName == 'IMG') {
            if (event.target.classList.contains('modal-exclude')) {
                return
            }
            imageSource.value = event.target.src
            showModal.value = true
        }
    }).bind(this)
});
</script>

<style>
#blog-page {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    gap: 1rem;
}

.sidebar {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    width: 60vw;
}

.blog {
    display: flex;
    flex-direction: column;
    max-width: 1100px !important;
}

.box {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
    padding: 1rem;
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
        max-width: 100% !important;
        width: 90vw !important;
        margin: 0.5rem 0;
    }
}
</style>

<style>
article {
    width: 100%;
}

article img {
    max-width: 85%;
    max-height: 400px;
    height: auto;
    box-shadow: var(--main-shadow);
    border-radius: 0.5rem;
}

article p img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

/* Tables */
article table {
    display: block;
    overflow: auto !important;
    position: relative !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    border-radius: 0.5rem !important;
    width: fit-content;
}

article table tbody,
article table thead {
    overflow: auto;
}

/* Cell padding */
article table td,
article table th {
    padding: 0.6rem;
}

/* Center table headings */
article table th {
    text-align: center;
    background-color: var(--main-red);
    color: white;
}

/* Highlight odd rows */
article table tr:nth-child(odd) {
    background-color: var(--main-light-gray);
}

/* Code blocks */
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
}</style>