<template>
    <!-- <label class="absolute text-sm text-gray-700 dark:text-gray-400">{{ label }}</label> -->
    <input class="py-0.5 w-full text-sm bg-transparent 
        border-0 border-b-2 border-gray-300 dark:border-gray-600
         dark:focus:border-main-color focus:outline-none focus:border-main-color"
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: String,

    modelValue: {
        type: [String, Number],
        default: ''
    }
})

</script>