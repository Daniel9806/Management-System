<template>
  <RouterView />
</template>

<script setup>

</script>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-slate-200 text-gray-800 dark:bg-neutral-800 dark:text-gray-300 transition-all duration-200
   ease-linear
}

</style>
