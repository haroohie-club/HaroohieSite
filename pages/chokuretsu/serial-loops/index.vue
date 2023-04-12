<template>
    <NuxtLayout>
        <template #hero>
            <div id="hero">
                <div id="topbar">
                    <div id="logo">
                        <TitleGraphic graphic="club-logo" to="/" />
                    </div>
                </div>
                <div class="images">
                    <img src="/images/chokuretsu/serial-loops/script-editor.png" alt="Script editor" />
                    <img src="/images/chokuretsu/serial-loops/map-editing.png" alt="Serial Loops" />
                    <img src="/images/chokuretsu/serial-loops/sound-editing.png" alt="Serial Loops" />
                </div>
            </div>
        </template>
        <article>
            <ContentDoc path="chokuretsu/serial-loops" />
        </article>
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            gradientAngle: 135
        };
    },
    mounted() {
        // Slowly adjust the gradient so it looks cool on the hero
        setInterval(() => {
            this.gradientAngle += 1;
            if (this.gradientAngle > 360) {
                this.gradientAngle = 0;
            }
            document.getElementById("hero").style.background = `linear-gradient(${this.gradientAngle}deg, var(--sl-blue), var(--sl-green))`;
        }, 100);
    }
}

definePageMeta({
    layout: 'serial-loops',
});
</script>

<style scoped>
#topbar {
    margin: 0 auto;
    padding: 0;
}

#topbar #logo {
    max-width: 500px;
    width: 80vw;
    padding: 0.5rem;
}

#hero {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 22.5rem;
    background: linear-gradient(135deg, var(--sl-blue), var(--sl-green));
    padding-top: 0.8rem;
    margin-bottom: 2rem;
}

.images {
    display: flex;
    justify-content: center;
    max-width: 80vw;
    margin: auto;
    margin-top: 1rem;
}

.images img {
    max-width: 375px;
    border-radius: 0.25rem;
    margin: 0rem 1rem;
    box-shadow: var(--main-shadow);
}

.images img:hover {
    cursor: pointer;
    filter: brightness(0.8);
}
</style>