<template>
    <div class="newspaper">
        <div class="paper-topbar">
            <span>{{ current_date }} &bullet; Haroohie Translation Club News</span>
        </div>
        <div class="paper-body">
            <div class="paper-headline">Tsuruya is dead!</div>
            <div class="paper-main-story">
                <div class="main-story-image">
                    <img src="/images/chokuretsu/opening-subtitles.png" />
                    <ul class="main-story-bulletins">
                        <li>"Her life was too brie". Nyoro~n&hellip;</li>
                        <li><i>Chokuretsu</i> Ch.1 now available in English!</li>
                    </ul>
                </div>
                <div class="main-story-text">
                    <div class="main-story-title">"Nyoron~"s around the world following shock death</div>
                    <div class="main-story-content">THE WORLD was met with shock following the announcement that Tsuruya-san had died earlier on Monday Morning. Tributes were left around the world, including by delegates of the Smoked Cheese Corporation, Kadokawa Shoten and the band from Sound! Euphonium.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --newspaper-sepia: #f5e6d0;
    --newspaper-brown: #a67f5a;
    --newspaper-black: #232323;
}

.newspaper {
    width: 90%;
    max-height: 100%;
    min-height: 240px;
    margin: 0;
    padding: 0;
    background: radial-gradient(circle at 50% 0%, var(--newspaper-sepia) 10%, var(--newspaper-sepia) 60%);
    border: 0.2rem solid var(--newspaper-black);
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;

    /* Font */
    font-family: 'Notica Text', serif;
    color: var(--newspaper-black);

    /* Subtle Drop shadow */
    box-shadow: var(--main-shadow);
}

.paper-topbar {
    width: 100%;
    text-align: center;
    height: 10px;
    text-transform: capitalize;
    justify-content: center;
    font-size: 0.75rem;
    padding-top: 0.2rem;
}

.paper-body {
    display: flex;
    padding: 0 0.5rem;
    flex-direction: column;
    justify-content: center;
}

.paper-headline {
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.7rem;
    line-height: 1.35;
    justify-content: center;

    /* Disable wrapping */
    white-space: nowrap;
    overflow: hidden;
}

.paper-main-story {
    display: flex;
    flex-direction: row;
}

.main-story-image {
    margin: 0;
    width: 45%;
}

.main-story-text {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 70%;
}

.main-story-title {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.4rem;
}

.main-story-content {
    font-size: 0.8rem;
    text-align: justify;
    margin-bottom: 0.4rem;
}

.main-story-image img {
    /* Apply sepia filter */
    filter: sepia(100%);
    max-width: 100px;
    height: auto;
}

.main-story-bulletins {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    font-weight: bold;
}

.main-story-bulletins li {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-right: 0.2rem;
}
</style>

<script>
let currentDate = new Date();
// Export currentDate prop to be used in the template as a computed property
export default {
    data() {
        return {
            current_date: currentDate.getMonth() + 1 + '/' + currentDate.getFullYear()
        }
    }
}
</script>