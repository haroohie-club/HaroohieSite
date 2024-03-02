<template>
    <div class="ds">
        <video class="gameplay-video" autoplay loop muted playsinline>
            <source :src="'/videos/' + video" type="video/mp4" />
            {{ $t('no-html5-video') }}
        </video>
        <object class="system-overlay" width="610" height="640" data="/images/chokuretsu/nintendo-dsi.svg">
            <img src="/images/chokuretsu/nintendo-dsi.png" :alt="$t('chokuretsu-trailer-footage')" />
        </object>
    </div>
</template>

<style scoped>
.ds {
    position: relative;
    z-index: 2;
    width: 610px;
    height: 640px;
    margin: 0 auto;
    background: var(--main-gray);
    border-radius: 10px;
    overflow: hidden;
}

.ds .gameplay-video {
    position: absolute;
    z-index: -1;
    left: 127px;
    top: 48px;
    object-fit: cover;
}
</style>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})

const { video } = defineProps({
  video: {
    type: String,
    required: true
  }
})

</script>