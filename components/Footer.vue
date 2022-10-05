<template>
    <footer>
        <div id="copyright">
            <div>Website &copy; {{ current_year }}, Haroohie Translation Club</div>
            <div>Haruhi Suzumiya, the original game and related assets are property of Kadokawa / SEGA / Nagaru
                Tanigawa / SOS Brigade</div>
        </div>
    </footer>
</template>

<style>
footer {
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, white 0%, rgba(235, 235, 235, 1) 50%);
    color: var(--main-gray);
    text-align: center;
    width: 100%;
    justify-self: flex-end;
    margin-top: auto;
}
</style>

<script>
export default {
    data() {
        return {
            current_year: new Date().getFullYear()
        }
    }
}
</script>