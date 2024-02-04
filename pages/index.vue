<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
definePageMeta({
    title: 'Haroohie Translation Club',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
    layout: 'common'
})
</script>

<template>
    <div>
        <NuxtLayout>
            <a rel="me" href="https://mastodon.online/@haroohie" style="display:none;"></a>
            <div id="home-page">
                <div class="top">
                    <div class="releases box">
                        <h2>{{ $t('our-translations') }}</h2>
                        <TranslationsGrid />
                    </div>
                </div>
                <div class="newsfeed">
                    <div class="socials box">
                        <h2>{{ $t('about') }}</h2>
                        <ContentDoc :path="`/${locale}`" />
                        <h2>{{ $t('social-links') }}</h2>
                        <SocialLinks :top_link="localePath('/blog')" top_icon="fa6-solid:paper-plane" :top_text="$t('news-and-blog')" />
                        <br />
                        <h2>{{ $t('projects') }}</h2>
                        <ButtonLink :link="localePath('/chokuretsu')" type="top-piece" fullwidth color="red" icon="fa6-solid:language">
                            {{ $t('chokuretsu-patch') }}</ButtonLink>
                        <ButtonLink :link="localePath('/chokuretsu/serial-loops')" type="bottom-piece" fullwidth color="sl-blue"
                            icon="fa6-solid:gear">{{ $t('serial-loops') }}</ButtonLink>
                    </div>
                    <div class="blogs box">
                        <h2>{{ $t('from-the-clubroom') }}</h2>
                        <BlogPreviewStack />
                        <ButtonRow class="view-more">
                            <ButtonLink :link="localePath('/blog')" color="blue" icon="fa6-solid:paper-plane">{{ $t('view-all') }}</ButtonLink>
                            <ButtonLink :link="`/${locale == 'en' ? '' : locale}/rss.xml`" color="rss" icon="fa6-solid:rss">{{ $t('feed') }}</ButtonLink>
                        </ButtonRow>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
#home-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 90vw;
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
    height: fit-content;
    max-width: 250px;
}

#home-page .blogs {
    display: flex;
    flex-direction: column;
}

#home-page .blogs .view-more {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
}

h2 {
    margin: 0;
    margin-bottom: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Less than 850px */
@media screen and (max-width: 940px) {
    #home-page .newsfeed {
        flex-direction: column-reverse;
    }

    .socials {
        max-width: unset !important;
    }
}
</style>