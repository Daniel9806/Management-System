<template>
    <div>
       <h1>Home: {{ counterStore.counter }}</h1>
       <h2>Number Of Changes: {{ counterStore.numberOfChanges }}</h2>
       <button @click="counterStore.incrementBy(3)">+</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counterStore.js'

const counterStore = useCounterStore()

const increment = (value) => {
    counterStore.incrementBy(value)
}

</script>
