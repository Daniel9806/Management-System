<template>
    <form class="space-y-5 px-24 py-10">
        <BaseInput label="Username" v-model="user.username" type="text" />
        <BaseInput label="Name" v-model="user.name" type="text" />
        <BaseInput label="Surname" v-model="user.surname" type="text" />
        <BaseInput label="Lastname" v-model="user.lastname" type="text" />
        <BaseInput label="Password" v-model="user.password" type="password" />

        <Button @click.prevent="onSubmit" label="Submit" 
        :loading="userStore.getLoadingCreating" />
    </form>
</template>

<script setup>
import BaseInput from '../tools/BaseInput.vue'
import { ref, reactive } from 'vue'
import { useUserStore } from '../../store/userStore'

const userStore = useUserStore()

const user = ref({
    station_id: 1,
    role_id: 4,
    username: '',
    name: '',
    surname: '',
    lastname: '',
    password: ''
})

const onSubmit = async () => {
    await userStore.createUser(user.value)
    user.value = {}
}

</script>