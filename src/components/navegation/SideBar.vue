<template>
  <div class="w-44 fixed top-5 left-5 bottom-5 flex flex-col rounded-xl
           bg-slate-600 dark:bg-black text-gray-300">
    <div class="overflow-auto scrollbar-hide space-y-1.5">

      <div class="mb-8 flex flex-col items-center mt-3">
        <img class="w-8 h-8" src="../../assets/vue.svg" alt="vue-logo">
        <p class="text-lg text-gray-200 font-bold">Vue.js</p>
      </div>

      <div v-for="item in options" :key="item.id" @click="currentTab = item.name" 
      class="pl-4 cursor-pointer rounded-lg">

        <router-link :to="item.route" :class="{ activeContainer: currentTab == item.name }"
          class="py-1 flex items-center space-x-3">
          <i :class="{ activeIcon: currentTab == item.name }"
            class="material-icons text-lg text-gray-400">{{
              item.icon
            }}</i>
          <span :class="{ activeText: currentTab == item.name }" class="font-semibold 
            text-sm">{{ item.name }}</span>
        </router-link>
      </div>

      <!-- LogOut -->
      <div class="absolute ml-9 bottom-2 px-2 w-auto cursor-pointer rounded-lg hover:bg-gray-500 
                dark:hover:bg-neutral-700" @click="onLogout">
        <div class="py-1 flex items-center space-x-3">
          <i class="material-icons text-lg text-gray-200">logout</i>
          <span class="font-semibold text-sm">Log Out</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useAuthStore } from "../../store/authStore";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore()

const currentTab = ref("");

const options = ref([
  {
    icon: "home",
    name: "Home",
    route: "/dash",
  },
  {
    icon: "person",
    name: "Counter",
    route: "/dash/counter",
  },
  {
    icon: "work",
    name: "Users",
    route: "/dash/users",
  },
  {
    icon: "radio",
    name: "Programs",
    route: "",
  },
]);

const onLogout = () => {
  authStore.logout()
  router.push('/')
}

const setCurrentTab = async () => {
  currentTab.value = route.name;
};

//Created
setCurrentTab();

</script>

<style scoped>
.active_dark {
  background-color: #24292e;
}

.active_light {
  background-color: #bec2c5;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.activeContainer {
  @apply ml-5
}

.activeText {
  @apply bg-blue-400 py-5 pl-6 rounded-l-xl transition-all duration-200 ease-linear 
  relative w-full text-lg
}

.activeIcon {
  @apply bg-main-color py-2 px-3 text-3xl text-gray-100 rounded-t-xl rounded-bl-xl z-10 
  transition-all duration-200 ease-linear absolute left-2
}
</style>
