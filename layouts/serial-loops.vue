<!-- Template for serial loop pages -->
<template>
    <div id="content-body">
        <slot name="top" />
        <div id="page-with-sidebar">
            <div id="sidebar">
                <NuxtLink to="/chokuretsu/serial-loops">
                    <ProjectLogoHeader icon="serial-loops/icon.png">Serial Loops</ProjectLogoHeader>
                </NuxtLink>
                <div id="sidebar-inner">
                    <ContentDoc path="chokuretsu/serial-loops/docs/sidebar" />
                </div>
            </div>
            <div id="main" class="column"><slot /></div>
        </div>
        <ImageModal v-show="showModal" :imageSource="imageSource" @close-modal="showModal = false" />
        <div id="footer"><Footer /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            imageSource: null,
        }
    },
    mounted() {
        window.addEventListener('click', function(event) {
            if (event.target.tagName == 'IMG') {
                if (event.target.classList.contains('modal-exclude')) {
                    return;
                }
                this.imageSource = event.target.src;
                this.showModal = true;
            }
        }.bind(this));
    },
}
</script>

<style scoped>
/* Content display */
#content-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    background-image: none;
}

/* page with sidebar */
#page-with-sidebar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
}

#main {
    width: 80%;
}

#sidebar-inner {
    background-color: var(--main-light-gray);
    min-height: inherit;
    width: 15rem;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    padding: 2rem 1.25rem;
}

.column {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
}

#footer {
    background-color: var(--main-light-gray);
    padding-bottom: 0.75rem;
    margin-top: 2rem;
}

/* Less than 1200px */
@media screen and (max-width: 1200px) {
    #page-with-sidebar {
        flex-direction: column-reverse;
    }

    article {
        min-height: 0;
    }
}

/* Less than 680px */
@media screen and (max-width: 680px) {
    .column {
        width: 90vw;
    }
}

/* Less than 580px */
@media screen and (max-width: 580px) {
    .column {
        width: 85vw;
    }
}
</style>

<style>
* {
    --sl-green: #88C224;
    --sl-blue: #00C4F5;
}

h1, h2, h3, h4, h5, h6 {
    text-decoration-color: var(--sl-green) !important;
}

article .sl-header {
    background: linear-gradient(135deg, var(--sl-blue) 0%, var(--sl-green) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
}

article {
    width: 100%;
    min-height: 79vh;
    margin: 0rem 1.5rem;
}

article img {
    max-width: 85%;
    max-height: 400px;
    height: auto;
    box-shadow: var(--main-shadow);
    border-radius: 0.5rem;
}

article p img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

/* Tables */
article table {
    display: block;
    overflow: auto !important;
    position: relative !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    border-radius: 0.5rem !important;
    width: fit-content;
}

article table tbody, article table thead {
    overflow: auto;
}

/* Cell padding */
article table td, article table th {
    padding: 0.6rem;
}

/* Center table headings */
article table th {
    text-align: center;
    background-color: var(--main-red);
    color: white;
}

/* Highlight odd rows */
article table tr:nth-child(odd) {
    background-color: var(--main-light-gray);
}

/* Code blocks */
article pre {
    display: block;
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    overflow: auto !important;
    position: relative !important;
}

article code {
    overflow: auto;
    word-break: normal;
    word-wrap: normal;
}

article blockquote {
    border-left: 0.5rem solid var(--main-light-gray);
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
}
</style>