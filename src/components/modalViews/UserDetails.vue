<template>
  <div class="text-gray-700 dark:text-gray-200 h-[300px] p-4">
    <!-- TOP -->
    <!-- <Loading
      v-if="!readyInfo"
      class="dark:bg-gray-600 bg-gray-300 rounded-sm"
    /> -->
    <div v-if="item">
      <div class="p-2 flex space-x-10 border-b border-gray-300 dark:border-gray-600">
        <div>
          <img v-if="!image" class="w-20 h-20" src="../../../src/assets/vue.svg" alt="" />
          <img v-else class="w-20 h-20" :src="image" alt="" />
        </div>
        <div>
          <p class="mt-5 text-lg font-semibold">
            {{ item.name }} {{ item.lastname }} {{ item.surname }}
          </p>
        </div>
      </div>

      <!-- PERSONAL INFO -->
      <div>
        <div class="flex mt-5">
          <div class="space-y-4 pr-5 w-auto border-r border-gray-300
             dark:border-gray-600">
            <div class="flex items-center space-x-2">
              <p class="text-gray-900 dark:text-gray-200 text-sm underline">
                ID:
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ item.id }}
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-gray-900 dark:text-gray-200 text-sm underline">
                Username:
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ item.username }}
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-gray-900 dark:text-gray-200 text-sm underline">
                Sexo:
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ true ? "Masculino" : "Femenino" }}
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-gray-900 dark:text-gray-200 text-sm underline">
                Station:
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ item.station.name }}
              </p>
              <!-- <p v-else class="text-gray-400">-</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object
})

</script>
