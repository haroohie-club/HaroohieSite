<template>
    <div class="chokuretsu-nav">
        <div class="nav-left">
            <object class="drop-shadow" data="/images/sos-logo.svg" type="image/svg+xml" width="100%" />
        </div>
        <div class="nav-right">
            <slot />
            <div class="nav-buttons">
                <ButtonLink link="/chokuretsu/guide" fullwidth color="red" icon="fa6-solid:book">Get Started</ButtonLink>
                <span class="nav-or">&ndash; or &ndash;</span>
                <ButtonLink link="/chokuretsu/guide" fullwidth type="top-piece" color="blue" icon="fa6-solid:file-import">ROM Patcher</ButtonLink>
                <ButtonLink link="https://github.com/haroohie-club/ChokuretsuTranslationRelease/releases/latest" fullwidth type="mid-piece" color="blue" icon="fa6-solid:download">Download .xdelta</ButtonLink>
                <ButtonLink link="https://github.com/haroohie-club" fullwidth type="bottom-piece" color="blue" icon="fa6-brands:github">Sources & Docs</ButtonLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .chokuretsu-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .nav-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-buttons a {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .nav-left {
        width: 25%;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .nav-left img {
        max-height: 200px;
        display: flex;
        align-self: center;
    }

    .nav-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
    }

    .nav-or {
        font-size: 1.4rem;
        font-weight: bold;
        width: 100%;
        text-align: center;
    }

    .drop-shadow {
        filter: drop-shadow(0.2em 0.2em 0.1em rgba(0, 0, 0, 0.5));
    }
</style>
