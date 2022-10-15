<!-- A basic page template with no default content margins -->
<template>
    <div id="content-body">
        <div id="topbar">
            <div id="logo">
                <TitleGraphic graphic="club-logo" to="/" />
            </div>
        </div>
        <slot />
        <Footer />
    </div>
</template>

<style scoped>
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
    padding: 0.5rem;
}
</style>