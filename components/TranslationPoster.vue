<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>

<template>
    <div class="translation">
        <div v-if="$t(translation.poster)" class="poster">
            <NuxtLink :to="localePath(translation.page)">
                <img :src="'/images/' + $t(translation.poster)" :alt="$t(translation.title) + ' poster'" />
            </NuxtLink>
        </div>
        <div class="about">
            <div :class="'title ' + translation.color">
                <NuxtLink :to="localePath(translation.page)">{{ $t(translation.title) }}</NuxtLink>
            </div>
            <div v-if="translation.tags" class="tags">
                <IconifiedText icon="fa6-solid:gamepad" />
                <span class="tag" v-for="tag of translation.tags">
                    <span v-if="tag.startsWith('[')">{{ $t(tag.substring(1, tag.length - 1)) }}</span>
                    <span v-else>{{ tag }}</span>
                </span>
            </div>
            <div v-if="$t(translation.tagline)" class="tagline">{{ $t(translation.tagline) }}</div>
            <div v-if="$t(translation.description)" class="description">{{ $t(translation.description) }}</div>
            <div v-if="translation.page" class="button">
                <ButtonLink :link="localePath(translation.page)" icon="fa6-solid:file-import" :color="translation.color">{{ $t('get-patch') }}</ButtonLink>
            </div>
            <div v-else :class="'button coming-soon ' + translation.color">
                <IconifiedText icon="fa6-solid:pencil">{{ $t('coming-soon') }}</IconifiedText>
            </div>
        </div>
    </div>
</template>

<style scoped>
.translation {
    display: flex;
    flex-direction: row;
    max-width: 550px;
    min-width: 100px;
}

.translation .poster {
    display: flex;
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
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
}

.translation .about {
    display: flex;
    flex-direction: column;
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

.about .tags .tag {
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.1rem 0.25rem;
    margin: 0 0.2rem;
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

/* Less than 650px */
@media screen and (max-width: 650px) {
    .translation {
        flex-direction: column;
        width: fit-content !important;
    }

    .translation .poster {
        justify-content: center;
        margin: auto;
        margin-bottom: 0.5rem;
    }

    .translation .title {
        justify-content: center;
    }

    .translation .about {
        margin: auto;
    }

    .about .tags {
        display: none;
    }

    .about .button {
        display: none;
    }
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