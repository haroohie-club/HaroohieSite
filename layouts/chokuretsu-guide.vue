<!-- A guide page with Haruhi Chokuretsu styling -->
<template>
    <div id="content-body">
        <div id="guide-body">
            <div class="content">
                <div id="guide-content">
                    <TitleGraphic graphic="chokuretsu/game-logo" />
                    <slot />
                </div>
            </div>
            <div class="sidebar">
                <slot name="sidebar" />
            </div>
        </div>
        <Footer />
        <DownloadCounter />
    </div>
</template>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(54, 143, 254, 1) 0%, rgba(255, 255, 255, 0.01) 15em);
    justify-content: center;
    align-items: flex-start;
}

#guide-body {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    justify-content: space-between;
}

#guide-body .content {
    width: 70%;
    padding: 1rem;
}

#guide-body .sidebar {
    width: 20%;
    padding: 1rem;
}

</style>