<template>
    <div class="space-y-4 pr-6">
        <div class="flex space-x-2">
            <h1>Users</h1>
            <button @click="modalCreateActive = true" class="flex items-center px-4 bg-main-color rounded-t-lg rounded-bl-lg">
                <i class="material-icons">add</i>
            </button>
        </div>

        <Loading v-if="userStore.getLoadingFetching" />

        <TableGeneric v-else 
        :filteredList="userStore.getUsers" 
        :header="header" 
        :fields="fields" 
        :greenAction="'Edit'"
        :blueAction="'Details'" 
        :redAction="'Delete'" 
        @onGreenAction="onEdit($event)"
        @onBlueAction="onDetails($event)" />

        <Teleport to="#modal">
            <Transition name="modal">
                <modal-generic v-if="modalCreateActive"
                 @closeModal="modalCreateActive = false"
                 maxWidth="400" title="New User">
                    <CreateUser @user-created="userCreated()" />
                </modal-generic>
            </Transition>
        </Teleport>

        <Teleport to="#modal">
            <Transition name="modal">
                <modal-generic v-if="modalDetailsActive"
                 @closeModal="modalDetailsActive = false"
                 maxWidth="600" title="User Details">
                   <UserDetails :item="itemSelected" />
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
import UserDetails from '../components/modalViews/UserDetails.vue'

const userStore = useUserStore()

// const users = ref([])
const modalCreateActive = ref(false)
const modalDetailsActive = ref(false)
const itemSelected = ref({})

const fields = [
    'username', 'name', 'lastname', 'surname', 'confirmed'
]

const header = [
    'Username', 'Name', 'Last Name', 'Surname', 'Confirmed'
]

const onEdit = (item) => {
    console.log(item)
}

const onDetails = (item) => {
    modalDetailsActive.value = true
    itemSelected.value = item
}

const userCreated = async () => {
    await userStore.fetchUsers()
    modalCreateActive.value = false
}

onMounted(async () => {
    if (userStore.getUsers.length == 0) {
        await userStore.fetchUsers()
    }

})

</script>

<style scoped>
.col {
    padding: 10px;
}
</style>