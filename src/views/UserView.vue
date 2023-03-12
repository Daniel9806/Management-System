<template>
    <div class="space-y-1">
        <button @click="modalActive = true" class="flex items-center p-2 bg-main-color rounded-md text-sm">New User
            <i class="material-icons ml-1">add</i>
        </button>
        <Loading v-if="userStore.getLoadingUser" />

        <TableGeneric v-else :filteredList="users" :header="header" :fields="fields" :greenAction="'Edit'"
            :blueAction="'Details'" :redAction="'Delete'" @onGreenAction="onEdit($event)" />

        <Teleport to="#modal">
            <Transition name="modal"> 
                <modal-generic v-if="modalActive" 
                @closeModal="modalActive = false" maxWidth="600" title="New User">
                    ASASASASA
                </modal-generic>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import TableGeneric from '../components/tools/TableGeneric.vue'
import ModalGeneric from '../components/tools/ModalGeneric.vue'
import { reactive, ref, onMounted } from 'vue'
import { useUserStore } from '../store/userStore.js'
import Loading from '../components/tools/Loading.vue'

const userStore = useUserStore()

const users = ref([])
const modalActive = ref(false)

onMounted(async () => {
    users.value = await userStore.fetchUsers()
})

const fields = [
    'id', 'name', 'lastname', 'surname'
]

const header = [
    'ID', 'Name', 'Last Name', 'Surname'
]

const onEdit = (item) => {
    console.log(item)
}

</script>

<style scoped>

</style>