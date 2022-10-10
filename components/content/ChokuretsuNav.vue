<template>
    <div class="chokuretsu-nav">
        <div class="nav-left">
            <img src="/images/chokuretsu/sos-logo.png" alt="SOS brigade logo!" />
        </div>
        <div class="nav-right">
            <slot />
            <div class="nav-buttons">
                <ButtonLink link="/chokuretsu/guide" fullwidth color="red" icon="fa6-solid:book">Get Started</ButtonLink>
                <span class="nav-or">- or -</span>
                <div>
                    <ButtonLink link="/chokuretsu/guide" fullwidth type="top-piece" color="blue" icon="fa6-solid:file-import">ROM Patcher</ButtonLink>
                    <ButtonLink link="/chokuretsu/guide" fullwidth type="mid-piece" color="blue" icon="fa6-solid:download">Download .xdelta</ButtonLink>
                    <ButtonLink link="/chokuretsu/guide" fullwidth type="bottom-piece" color="blue" icon="fa6-brands:github">Sources & Docs</ButtonLink>
                </div>    
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
        justify-content: space-evenly;
        min-height: 240px;
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
        text-align: center;
        width: 95%;
    }
</style>