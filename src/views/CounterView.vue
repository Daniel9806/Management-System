<template>
    <div>
        <h1>Counter: {{ counterStore.counter }}</h1>
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counterStore';

const counterStore = useCounterStore()

</script>

<style lang="scss" scoped>

</style>