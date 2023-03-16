<template>
    <div class="space-y-4 pr-6">
        <div class="flex space-x-2">
            <h1>Users</h1>
            <button @click="modalActive = true" 
            class="flex items-center px-4 bg-main-color rounded-t-lg rounded-bl-lg">
                <i class="material-icons">add</i>
            </button>
        </div>

        <Loading v-if="userStore.getLoadingFetching" />

        <TableGeneric v-else :filteredList="users" :header="header" :fields="fields" :greenAction="'Edit'"
            :blueAction="'Details'" :redAction="'Delete'" @onGreenAction="onEdit($event)" />

        <Teleport to="#modal">
            <Transition name="modal">
                <modal-generic v-if="modalActive" @closeModal="modalActive = false" maxWidth="600" title="New User">
                   <CreateUser @user-created="userCreated()" />
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
import CreateUser from '../components/modalViews/CreateUser.vue'
// import { useAlert } from '../composables/useAlert'

const userStore = useUserStore()
// const { timerToast } = useAlert()

const users = ref([])
const modalActive = ref(false)

const fields = [
    'username', 'name', 'lastname', 'surname', 'confirmed'
]

const header = [
    'Username', 'Name', 'Last Name', 'Surname', 'Confirmed'
]

const onEdit = (item) => {
    console.log(item)
}

const userCreated = async () => {
    users.value = await userStore.fetchUsers()
    modalActive.value = false
}

onMounted(async () => {
    users.value = await userStore.fetchUsers()
})

</script>

<style scoped>
.col {
    padding: 10px;
}
</style>