<template>
    <a :href="link" :rel="rel">
        <div :class="'button ' + color + '-color ' + (fullwidth ? 'fullwidth ' : '') + (type ? type : '')">
            <span v-if="icon">
                <IconifiedText :icon="icon">
                    <ContentSlot :use="$slots.default" unwrap="p" />
                </IconifiedText>
            </span>
            <span v-else>
                <ContentSlot :use="$slots.default" unwrap="p" />
            </span>
        </div>
    </a>
</template>

<script>
import IconifiedText from "./IconifiedText.vue";
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        fullwidth: {
            type: Boolean,
            required: false
        },
        rel: {
            type: String,
            required: false
        }
    },
    components: { IconifiedText }
}
</script>

<style scoped>
.button {
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    box-sizing: border-box;

    /* Shading effects */
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
    box-shadow: inset 0.5vh 0.5vh 0.7vh rgb(0 0 0 / 20%);
}

.top-piece {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.mid-piece {
    border-radius: 0 0 0 0 !important;
}

.bottom-piece {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}

.fullwidth {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
}

.button:hover {
    filter: brightness(80%), inset 0.5vh 0.5vh 0.7vh rgb(0 0 0 / 20%);
}

.red-color {
    background: var(--main-red);
}

.blue-color {
    background: var(--main-blue);
}

.discord-color {
    background: #5865f2;
}

.twitter-color {
    background: #1da1f2;
}

.mastodon-color {
    background: #313543;
}

.black-color {
    background: #111111;
}

.sl-green-color {
    background: #88C224;
}

.sl-blue-color {
    background: #00C4F5;
}

.rss-color {
    background: #ff6600;
}
</style>
