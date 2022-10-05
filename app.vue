<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
/* Colors */
:root {
  --main-red: #c02020;
  --main-blue: #3790ff;
  --main-grey: #898989;
  --main-light-gray: #eeeeee;
  --main-dark-gray: #232323;
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
</style>