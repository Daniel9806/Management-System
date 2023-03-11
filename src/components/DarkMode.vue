<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// console.log(isDark.value)

</script>

<template>
    <button @click="toggleDark()" class="py-1">Toggle</button>
 </template>

<style scoped>

</style>