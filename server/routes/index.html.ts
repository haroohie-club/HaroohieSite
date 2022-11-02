export default defineEventHandler(async (event) => {
    const html = `<html>
    <head>
    <link rel="canonical" href="https://haroohie.club/" />
    <script type="text/javascript">
    window.location = "https://haroohie.club/";
    </script>
    </head>
    </html>
    `

    event.res.end(html);
})