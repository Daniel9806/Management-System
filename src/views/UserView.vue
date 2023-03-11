<template>
    <div class="">
        <Loading v-if="userStore.getLoadingUser" />

        <TableGeneric v-else :filteredList="users" :header="header" :fields="fields" 
        :greenAction="'Edit'" :blueAction="'Details'" :redAction="'Delete'" 
        @onGreenAction="onEdit($event)" />
    </div>
</template>

<script setup>
import TableGeneric from '../components/tools/TableGeneric.vue'
import { reactive, ref, onMounted } from 'vue'
import { useUserStore } from '../store/userStore.js'
import Loading from '../components/tools/Loading.vue'

const userStore = useUserStore()

const users = ref([])

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

<style scoped></style>