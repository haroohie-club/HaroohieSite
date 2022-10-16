<template>
    <NuxtLink :to="to" class="title-graphic">
        <object class="graphic-vector" :data="'/images/' + graphic + '.svg'">
            <img class="graphic-image" :src="'/images/' + graphic + '.png'" alt="Title graphic" />
        </object>
    </NuxtLink>
</template>

<style scoped>
.title-graphic {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 700px;
    height: min-content;
    margin: 0 auto;
    filter: drop-shadow(0.12em 0.12rem 0.12rem rgba(0, 0, 0, 0.4));
}

.graphic-vector {
    width: 85%;
    height: auto;
}

.graphic-image {
    width: 85%;
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