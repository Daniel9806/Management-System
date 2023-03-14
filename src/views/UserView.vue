<template>
    <div class="space-y-1">
        <div>
            <button @click="modalActive = true" class="flex items-center py-1
                             px-2 bg-main-color rounded-lg text-sm">New User
                <i class="material-icons ml-1">add</i>
            </button>
        </div>

        <Loading v-if="userStore.getLoadingUser" />

        <TableGeneric v-else :filteredList="users" :header="header" :fields="fields" :greenAction="'Edit'"
            :blueAction="'Details'" :redAction="'Delete'" @onGreenAction="onEdit($event)" />

        <Teleport to="#modal">
            <Transition name="modal">
                <modal-generic v-if="modalActive" @closeModal="modalActive = false" maxWidth="600" title="New User">
                    <form class="space-y-5 p-10">
                        <BaseInput label="Title" v-model="event.title" type="text" />

                        <BaseInput label="Description" v-model="event.description" type="password" />

                        <button @click.prevent="onSubmit">Send</button>
                    </form>
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
import BaseInput from '../components/tools/BaseInput.vue';

const userStore = useUserStore()

const users = ref([])
const modalActive = ref(false)

const event = reactive({
    title: '',
    description: ''
})

const onSubmit = () => {
    console.log(event)
}

const fields = [
    'id', 'name', 'lastname', 'surname', 'confirmed'
]

const header = [
    'ID', 'Name', 'Last Name', 'Surname', 'Confirmed'
]

const onEdit = (item) => {
    console.log(item)
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