<template>
    <div class="button-row">
        <slot />
    </div>
</template>

<style scoped>
.button-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
}
</style>