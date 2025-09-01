<template>
    <div class="download-links">
        <ButtonLink :link="buttonLink" :color="color" icon="fa6-solid:download" class="download-button">
            {{ $t('loopy-suite-download-latest') }}
        </ButtonLink>

        <a :href="'https://flathub.org/' + fixupLocale(locale) + '/apps/' + flathubId" target="_blank">
            <img width='180' alt='Get it on Flathub' :src="'https://flathub.org/api/badge?svg&locale=' + fixupLocale(locale)" class="download-image modal-exclude"/>
        </a>
    </div>
</template>

<script setup>
const { locale, t } = useI18n({
  useScope: 'local'
})

function fixupLocale(loc) {
    return loc.replace('-han', '-Han').replace('-br', '-BR');
}

const { buttonLink, color, flathubId } = defineProps({
    buttonLink: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false,
        default: 'red'
    },
    flathubId: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.download-button {
    padding: 8px 0;
}
.download-links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.download-image {
    max-width: 100%;
    box-shadow: none;
    border-radius: 0;
}
</style>