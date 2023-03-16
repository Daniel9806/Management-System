<template>
  <div v-if="authStore.getUserAuth" class="text-gray-700 dark:text-gray-300 p-2">
    <div class="flex items-center space-x-4 border-b border-gray-300 dark:border-gray-600 pb-3">
      <input
        ref="fileInput"
        type="file"
        style="display: none"
        class="input-file"
        @change="onFileSelected"
      />

      <!-- <LoadingIcon v-if="loading"/> -->
      <div @click.prevent="$refs.fileInput.click()" class="cursor-pointer">
        <img class="w-20 h-20 rounded-full" 
        src="../../assets/vue.svg" alt="" />
        <!-- <img v-else class="w-20 h-20 rounded-full" :src="getUserImage" alt="" /> -->
      </div>
      <div class="">
        <p class="font-semibold">
          {{ authStore.getUserAuth.name }} {{ authStore.getUserAuth.surname }}
          {{ authStore.getUserAuth.lastname }}
        </p>
      </div>
    </div>

    <div>
      <div class="flex mt-5">
        <div class="space-y-4 pr-5 w-auto">
          <div class="flex items-center space-x-2">
            <p class="text-gray-900 dark:text-gray-200 text-sm underline">
              Rol Principal:
            </p>
            <!-- <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ getRolesUserAuth[0].name }}
            </p> -->
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-gray-900 dark:text-gray-200 text-sm underline">
              Usuario:
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ authStore.getUserAuth.username }}
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-gray-900 dark:text-gray-200 text-sm underline">
              Nomber:
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ authStore.getUserAuth.name }}
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-gray-900 dark:text-gray-200 text-sm underline">
              Primer Apellido:
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ authStore.getUserAuth.surname }}
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-gray-900 dark:text-gray-200 text-sm underline">
              Segundo Apellido:
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ authStore.getUserAuth.lastname }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import LoadingIcon from '@/components/tools/LoadingIcon.vue'

import { useAuthStore } from "../../store/authStore";
import { ref } from "vue";
// import mainApi from "@/api/mainApi";

const authStore = useAuthStore()

const localImage = ref(null);
const image = ref("");
const loading = ref(false)


    // const onFileSelected = async (event) => {
    //   const file = event.target.files[0];
    //   if (!file) {
    //     return;
    //   }
    //   const reader = new FileReader();

    //   let rawImg;
    //   reader.onload = () => (localImage.value = reader.result);

    //   reader.onloadend = async () => {
    //     rawImg = reader.result;
    //     image.value = rawImg;

    //     try {
    //       const data = {
    //         id: getUserAuth.value.id,
    //         img: image.value
    //       }
    //       loading.value = true
    //       const resp = await updateImage(data);
    //       if(resp) {
    //         await refresh()
    //         await fetchUserImage(getUserAuth.value.file_id)
    //         loading.value = false
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // };

</script>
