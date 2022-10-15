<template>
    <div class="translation">
        <div v-if="translation.poster" class="poster">
            <NuxtLink :to="translation.page">
                <img :src="'/images/' + translation.poster" :alt="translation.title + ' poster'" />
            </NuxtLink>
        </div>
        <div class="about">
            <div :class="'title ' + translation.color">
                <NuxtLink :to="translation.page">{{ translation.title }}</NuxtLink>
            </div>
            <div v-if="translation.tags" class="tags">
                <IconifiedText icon="fa6-solid:gamepad" />
                <span class="tag" v-for="tag of translation.tags">{{ tag }}</span>
            </div>
            <div v-if="translation.tagline" class="tagline">{{ translation.tagline }}</div>
            <div v-if="translation.description" class="description">{{ translation.description }}</div>
            <div v-if="translation.page" class="button">
                <ButtonLink :link="translation.page" icon="fa6-solid:file-import" :color="translation.color">Get Patch</ButtonLink>
            </div>
            <div v-else :class="'button coming-soon ' + translation.color">
                <IconifiedText icon="fa6-solid:pencil">Coming soon&hellip;</IconifiedText>
            </div>
        </div>
    </div>
</template>

<style scoped>
.translation {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    width: 550px;
}

.translation .poster {
    display: flex;
    width: 35%;
    margin-right: 0.5rem;
    justify-content: center;
    align-content: center;
}

.poster:hover {
    cursor: pointer;
    transform: scale(1.025);
}

.poster img {
    max-width: 180px;
    height: auto;
}

.translation .about {
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-left: 0.5rem;
}

.about .title {
    font-size: 1.4rem;
    font-weight: bold;
}

.about .title a {
    color: black;
}

.about .tags {
    margin: 0.35rem 0;
}

.about .tagline {
    font-weight: bold;
    margin: 0.5rem 0;
}

.about .description {
    margin: 0.25rem 0;
}

.about .button {
    display: flex;
    justify-self: flex-end;
    width: 100%;
    justify-content: flex-end;
    align-self: flex-end;
    margin-top: auto;
}

.about .coming-soon {
    font-weight: bold;
}

.red a {
    color: var(--main-red) !important;
}

.red {
    color: var(--main-red) !important;
}

.blue a {
    color: var(--main-blue) !important;
}

.blue {
    color: var(--main-blue) !important;
}
</style>

<script>
import ButtonLink from './content/ButtonLink.vue';
export default {
    props: {
        translation: {
            type: Object,
            required: true
        }
    },
    components: { ButtonLink }
}
</script>