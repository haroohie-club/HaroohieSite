<template>
    <div id="translation">
        <div id="card">
            <div id="screenshots">
                <Screenshots :screenshots="translation.screenshots" :id="translation.id" />
                <div id="button">
                    <ButtonLink v-if="translation.page" type="top-piece" :link="translation.page" fullwidth color="red"
                        icon="fa6-solid:link">Project Page</ButtonLink>
                    <ButtonLink v-if="translation.patcher" type="bottom-piece" :link="translation.patcher" fullwidth
                        color="blue" icon="fa6-solid:file-import">Get Patch</ButtonLink>
                </div>
            </div>
            <div id="details">
                <h3>{{ translation.title }}</h3>
                <p><b>{{ translation.tagline}}</b></p>
                <p>{{ translation.description }}</p>

                <div id="tags">
                    <div v-for="tag of translation.tags">
                        <IconifiedText :icon="tag.icon">{{ tag.text }}</IconifiedText>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#details {
    padding: 1rem;
    padding-top: 0;
}

#details h3 {
    margin-top: 0;
}

#button {
    display: flex;
    flex-direction: column;
    max-width: 185px;
    margin-top: 1rem
}

#tags {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
</style>

<script>
import IconifiedText from './content/IconifiedText.vue';
import ButtonLink from './content/ButtonLink.vue';
import Screenshots from './Screenshots.vue';

export default {
    props: {
        translation: {
            type: Object,
            required: true
        }
    },
    methods: {

    },
    components: { IconifiedText, IconifiedText, ButtonLink, IconifiedText, Screenshots }
}


</script>