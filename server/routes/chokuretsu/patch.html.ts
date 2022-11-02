export default defineEventHandler(async (event) => {
    const html = `<html>
    <head>
    <link rel="canonical" href="https://haroohie.club/patch" />
    <script type="text/javascript">
    window.location = "https://haroohie.club/patch";
    </script>
    </head>
    </html>
    `

    event.res.end(html);
})