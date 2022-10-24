<template>
    <div class="overlay" @click="$emit('close-modal')">
        <div class="modal">
            <img v-if="imageSource" :src="imageSource" alt="image" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSource: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            showModal: false
        }
    }
}
</script>

<style>
article img:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
    cursor: pointer;
}
</style>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.65);
}

.modal {
    display: flex;
    max-width: 70vw;
    max-height: 85vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.modal img {
    max-width: 100%;
    max-height: 85vh;
    height: 100%;
    object-fit: fit-content !important;
    box-shadow: var(--main-shadow);
}

/* Less than 650px */
@media screen and (max-width: 650px) {
    .modal {
        max-width: 90vw;
        max-height: 90vh;
    }
}
</style>