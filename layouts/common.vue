<!-- A basic page template with no default content margins -->
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
}
</style>