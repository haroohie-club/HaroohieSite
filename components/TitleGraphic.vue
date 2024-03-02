<template>
    <NuxtLink :to="localePath(to)" class="title-graphic">
        <object class="graphic-vector" :data="`/images/${graphic}.svg`">
            <img class="graphic-image" :src="`/images/${graphic}.png`" alt="Title graphic" />
        </object>
    </NuxtLink>
</template>

<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>

<style scoped>
.title-graphic {
    filter: drop-shadow(0.12em 0.12rem 0.12rem rgba(0, 0, 0, 0.4));
    height: auto;
    max-width: 45em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graphic-vector, .graphic-image {
    width: 100%;
    height: auto;
}
</style>

<script>
export default {
    props: {
        graphic: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: false
        }
    }
}
</script>