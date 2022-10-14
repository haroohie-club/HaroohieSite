<template>
    <footer>
        <div id="copyright">
            <div>Website &copy; {{ current_year }}, Haroohie Translation Club</div>
            <div>Haruhi Suzumiya, the original games and related assets are property of Kadokawa / SEGA / Nagaru
                Tanigawa / SOS Brigade</div>
        </div>
    </footer>
</template>

<style>
footer {
    display: flex;
    flex-direction: column;
    color: var(--main-dark-gray);
    width: 100vw;
    padding: 0.4rem 0;
    padding-top: 1.2rem;
    text-align: center;
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