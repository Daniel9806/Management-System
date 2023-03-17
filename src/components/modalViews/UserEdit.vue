<template>
    <form class="space-y-5 p-10">
        <BaseInput label="Username" v-model="user.username" type="text" />
        <BaseInput label="Name" v-model="user.name" type="text" />
        <BaseInput label="Surname" v-model="user.surname" type="text" />
        <BaseInput label="Lastname" v-model="user.lastname" type="text" />

        <Button @click.prevent="onEdit" label="Edit" />
    </form>
</template>

<script setup>
import BaseInput from '../tools/BaseInput.vue'
import { ref, defineEmits } from 'vue'
import { useUserStore } from '../../store/userStore'

const userStore = useUserStore()

const emit = defineEmits(['userEdited'])

const props = defineProps({
    itemSelected: Object
})

const user = ref({
    username: props.itemSelected.username,
    name: props.itemSelected.name,
    surname: props.itemSelected.surname,
    lastname: props.itemSelected.lastname,
})

const onEdit = async () => {
    console.log(user.value)
}

</script>