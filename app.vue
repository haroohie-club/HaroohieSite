<template>
  <NuxtPage />
</template>

<style>
/* Colors */
:root {
  --main-red: #c02020;
  --main-blue: #3790ff;
  --main-grey: #898989;
  --main-light-gray: #eeeeee;
  --main-dark-gray: #232323;
  --main-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
}

/* Core style rules (font, bg color) */
body {
  /* Font and background color */
  font-family: 'Nunito', sans-serif;
  color: var(--main-dark-gray);

  /* Disable margin and padding */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

a {
  color: var(--main-blue);
  text-decoration: none;
}

a:hover {
  filter: brightness(80%);
  text-decoration: underline;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a {
  font-weight: 700;
  color: black !important;
  text-decoration-color: inherit !important;
}

h1,
h2,
h3,
h4,
h5 {
  /* Red underline effect */
  text-decoration: underline;
  text-decoration-color: var(--main-red) !important;
  text-underline-offset: 0.6rem;
}

object {
  /* Disable click events */
  pointer-events: none;
}
</style>