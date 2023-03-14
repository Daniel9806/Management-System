<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const checked = ref(false)
const toggleDark = useToggle(isDark)

</script>

<template>
    <ToggleButton v-model="checked" @click="toggleDark()" 
    onLabel="" offLabel="" onIcon="pi pi-moon" offIcon="pi pi-sun" />
 </template>

<style scoped>
</style>
