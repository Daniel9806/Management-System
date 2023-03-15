<template>
  <div class="absolute w-48 top-7 right-0 h-11">
    <div class="flex items-center space-x-2 mr-4 cursor-pointer">
      <DarkMode />
      <img class="w-8 h-8 rounded-full" src="../../assets/vue.svg" alt="">
      <p @click="modalUserActive = true" 
      v-if="authStore.getUserAuth">{{ authStore.getUserAuth.username }}</p>
      
      <!-- Sin conexion -->
      <p v-else @click="modalUserActive = true">Danielo</p>
    </div>
  </div>

  <modal-user v-if="modalUserActive" @closeModal="modalUserActive = false" :title="'User Settings'">
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

<style lang="scss" scoped></style>