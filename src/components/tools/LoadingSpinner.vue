<template>
    <div class="flex items-center w-44 h-24 justify-center dark:bg-neutral-900 bg-slate-300 rounded-md space-x-4">
        <!-- <AtomSpinner :animation-duration="1000" :size="50" :color="'rgb(55, 131, 84)'" /> -->
        <!-- <flower-spinner :animation-duration="2500" :size="50" :color="'rgb(55, 131, 84)'" /> -->
        <!-- <pixel-spinner :animation-duration="2000" :size="50" :pixel-size="60" 
        :color="'#ff1d5e'" /> -->
        <half-circle-spinner :animation-duration="1000" :size="50" 
        color="rgb(55, 131, 84)" />
        <!-- <fulfilling-square-spinner :animation-duration="4000" :size="50" 
        color="rgb(55, 131, 84)" /> -->
        <!-- <fulfilling-bouncing-circle-spinner :animation-duration="4000" :size="60" 
        color="rgb(55, 131, 84)" /> -->
        <!-- <spring-spinner :animation-duration="3000" :size="60" color="rgb(55, 131, 84)" /> -->

        <p v-if="text" class="text-lg font-bold">{{ text }}</p>
    </div>
</template>

<script setup>
import {
    AtomSpinner,
    FlowerSpinner,
    PixelSpinner,
    HalfCircleSpinner,
    FulfillingSquareSpinner,
    FulfillingBouncingCircleSpinner,
    SpringSpinner
} from 'epic-spinners'

const props = defineProps({
    text: String
})

</script>