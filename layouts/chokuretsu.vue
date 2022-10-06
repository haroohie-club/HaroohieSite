<!-- A page with Haruhi Chokuretsu background styles -->
<template>
    <div id="content-body">
        <slot />
        <Footer />
    </div>
</template>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(54, 143, 254, 1) 0%, rgba(255, 255, 255, 0.01) 15em);
}
</style>