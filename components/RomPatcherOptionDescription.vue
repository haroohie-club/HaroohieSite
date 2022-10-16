<template>
    <tr>
        <td colspan="2">
            <img class="patcher-option-image" :src="img" :alt="alt"/>
            <b>{{ title }}</b>
            <br/>
            <slot />
        </td>
    </tr>
</template>

<style scoped>
.patcher-option-image {
    float: right;
    max-height: 96px;
    padding-left: 0.2em;
}

</style>

<script>
export default {
    name: 'RomPatcherOptionDescription',
    props: {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        }
    }
}
</script>