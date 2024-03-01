<!-- A basic page template with no default content margins -->
<template>
    <div class="page">
        <div class="content">
            <Navbar />
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--main-light-gray);
    background-image: url('/images/haruhi-calisthenic.png');
    background-repeat: repeat;
}

.page .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    width: 90vw;
}
</style>