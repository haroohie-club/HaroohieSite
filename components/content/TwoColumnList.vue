<template>
    <ul id="two-column-list">
        <ContentSlot :use="$slots.default" unwrap="ul" />
    </ul>
</template>

<style scoped>
    #two-column-list {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    @media screen and (max-width: 500px) {
        #two-column-list {
            columns: 1;
            -webkit-columns: 1;
            -moz-columns: 1;
        }
    }
</style>