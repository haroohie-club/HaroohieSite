<template>
    <div class="chokuretsu-nav">
        <div class="nav-left">
            <object class="drop-shadow" data="/images/sos-logo.svg" type="image/svg+xml" width="100%" />
        </div>
        <div class="nav-right">
            <div class="nav-content">
                <slot />
            </div>
            <div class="nav-buttons">
                <ButtonLink link="/chokuretsu/guide" fullwidth color="red" icon="fa6-solid:book">Get Started
                </ButtonLink>
                <div id="nav-or">
                    <span>- or -</span>
                </div>
                <ButtonLink link="/chokuretsu/patch" fullwidth type="top-piece" color="blue"
                    icon="fa6-solid:file-import">ROM Patcher</ButtonLink>
                <ButtonLink link="https://github.com/haroohie-club/ChokuretsuTranslationRelease/releases/latest"
                    fullwidth type="mid-piece" color="blue" icon="fa6-solid:download">Download .xdelta</ButtonLink>
                <ButtonLink link="https://github.com/haroohie-club" fullwidth type="bottom-piece" color="blue"
                    icon="fa6-brands:github">Sources & Docs</ButtonLink>
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

.chokuretsu-nav .nav-left {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.chokuretsu-nav .nav-right {
    width: 65% !important;
    display: flex;
    flex-direction: column;
}

.nav-left .drop-shadow {
    filter: drop-shadow(0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3));
}

.nav-right .nav-content {
    width: 100%;
}

.nav-content .button {
    margin: 1rem;
}

.nav-right .nav-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.nav-buttons a {
    max-width: 90%;
}

.nav-buttons #nav-or {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0.2rem 0;
}

/* Hide left nav if screen size <= 400px */
@media screen and (max-width: 400px) {
    .chokuretsu-nav .nav-left {
        display: none;
    }

    .chokuretsu-nav .nav-right {
        max-width: 85vw;
        width: 100% !important;
    }
}
</style>
