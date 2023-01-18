<template>
    <div class="button-row">
        <slot />
    </div>
</template>

<style scoped>
.button-row {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}
</style>