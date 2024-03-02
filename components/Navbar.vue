<template>
    <nav>
        <div class="content">
            <TitleGraphic class="logo" graphic="club-logo" to="/" />
            <div class="menu">
                <SocialLinks type="nav" />
                <LanguageSwitcher />
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    width: 100%;
    background-color: #cccccc55;
    backdrop-filter: blur(0.5rem);
    filter: drop-shadow(0 0 0.5rem #00000055);
    max-width: 80vw;
}

nav .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1.5rem;
}

.content .logo {
    max-width: 30em;
}

.content .logo:hover {
    filter: drop-shadow(0 0 0.5rem #00000055);
}

.content .menu {
    max-width: 30em;
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

/* Tablet navbar */
@media screen and (max-width: 950px) {
    nav {
        margin: 0.5rem 0;
    }

    nav .content {
        flex-direction: column;
        align-items: center;
    }

    .menu {
        width: 90%;
        justify-content: space-between;
    }
}

/* Mobile navbar */
@media screen and (max-width: 650px) {
    nav {
        max-width: 100%;
        margin: 0;
        border-radius: 0 0 0.5rem 0.5rem;
    }
}
</style>