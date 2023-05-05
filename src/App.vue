<template>
  <div
    bg="gray-200"
    class="a4"
    dark:bg="gray-700"
    print:bg="transparent"
    display="block"
    m="y-[1.5cm] x-auto"
    print:shadow="none"
    shadow="lg"
  >
    <Resume />
  </div>
</template>

<style>
#app {
  box-sizing: border-box;
  font-family: "Inter", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: "Inter", sans-serif !important;
}
body {
  margin: 0;
  @apply bg-gray-300;
}

html.dark body {
  @apply bg-gray-900;
}
.a4 {
  width: 25cm;
  /* min-height: 29.7cm; */
}
@media (max-width: 25cm) {
  .a4 {
    width: auto !important;
    min-height: auto !important;
    box-shadow: none !important;
    margin: 0 !important;
    margin-top: 0 !important;
  }
}
@media print {
  .a4 {
    margin: 0 !important;
    width: 25cm !important;
    box-shadow: none !important;
  }
}
</style>
