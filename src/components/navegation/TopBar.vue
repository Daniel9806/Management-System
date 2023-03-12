<template>
  <div class="absolute w-9/12 mr-1 top-5 right-5 rounded-xl h-11 bg-slate-300 dark:bg-neutral-700">
    <div class="flex h-11 justify-between">
      <div><i class="material-icons cursor-pointer ml-2 mt-2">menu</i></div>
      <div class="flex items-center space-x-2 mr-4 cursor-pointer">
        <DarkMode />
        <img class="w-8 h-8 rounded-full" src="../../assets/vue.svg" alt="">
        <p @click="modalUserActive = true" 
        v-if="authStore.getUserAuth">{{ authStore.getUserAuth.username }}</p>
      </div>
    </div>
  </div>

  <modal-user v-if="modalUserActive" @closeModal="modalUserActive = false" 
  :title="'User Settings'">
    <UserProfile />
  </modal-user>
</template>

<script setup>
import DarkMode from '../DarkMode.vue'
import ModalUser from '../tools/ModalUserProfile.vue'
import UserProfile from '../../components/modalViews/UserProfile.vue'
import { useAuthStore } from '../../store/authStore';
import { ref } from 'vue'

const authStore = useAuthStore()

const modalUserActive = ref(false)

</script>

<style lang="scss" scoped>

</style>