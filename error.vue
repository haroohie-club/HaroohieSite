<template>
    <div class="error-404">
        <h2>404 - Not Found</h2>
        <img src="/images/404.png" alt="We're counting on you to take us home, Nagato!" />
        <p>Click to return to a more familiar space!</p>
        <ButtonLink link="/" color="red" icon="fa6-solid:house">Back to Home</ButtonLink>
    </div>
</template>

<style scoped>
.error-404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}
</style>

<script setup>
definePageMeta({
    title: 'Error - Haroohie Translation Club',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
})
</script>