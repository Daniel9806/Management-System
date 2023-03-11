<template>
  <div>
    <TopBar />
    <SideBar />
    <RouterView class="p-4 ml-52 mt-16" />
    <!-- absolute left-56 top-16 -->
  </div>
</template>

<script setup>
import SideBar from "../components/navegation/SideBar.vue";
import TopBar from "../components/navegation/TopBar.vue";

import { onMounted } from 'vue'
import { useAuthStore } from "../store/authStore";
// import { useStorage } from "@vueuse/core";

const authStore = useAuthStore()

onMounted(() => {
   authStore.refresh()
})

</script>
