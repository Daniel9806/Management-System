<template>
    <div>
       <h1>Home: {{ counterStore.counter }}</h1>
       <h2>Number Of Changes: {{ counterStore.numberOfChanges }}</h2>
       <Button class="myButton" 
       @click="counterStore.incrementBy(3)" label="+" />
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counterStore.js'

const counterStore = useCounterStore()

const increment = (value) => {
    counterStore.incrementBy(value)
}

</script>

<style scoped>
.myButton {
    @apply px-4 py-2
}
</style>
