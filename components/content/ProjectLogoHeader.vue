<template>
    <div id="logo-header">
        <img class="modal-exclude" :src="'/images/chokuretsu/' + icon"/>
        <div id="name">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
#logo-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
}

#logo-header img {
    max-width: 100px;
    width: 80vw;
}

#logo-header #name {
    font-size: 1.8rem;
    font-weight: 800;
    margin-top: 1rem;
    color: black !important;
}
</style>
