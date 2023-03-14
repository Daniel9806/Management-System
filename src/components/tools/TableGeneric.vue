<template>
  <div class="overflow-x-auto shadow-md">
    <table class="dark:bg-neutral-900 bg-slate-500 w-full text-sm text-left rounded-md">
      <thead class="text-base text-black dark:text-white border-b border-gray-600
       dark:border-black">
        <tr>
          <!-- loop through each value of the fields to get the table header -->
          <th class="py-2 px-6" v-for="item in header" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item" 
        class="border-t border-gray-400 bg-slate-300 dark:bg-neutral-700 
        dark:border-black hover:bg-gray-100 dark:hover:bg-neutral-600" >
          <td class="w-1/5 px-6" v-for="field in fields" :key="field">
            <template v-if="field != 'confirmed'">
              {{ item[field] }}
            </template>
            <div v-else class="ml-6">
              <template v-if="item[field]">
                <i class="text-green-600 material-icons">checked</i>
              </template>
              <template v-else>
                <i class="text-red-500 material-icons">close</i>
              </template>
            </div>
          </td>
          <!-- ACTIONS -->
          <td class="py-2 mr-4 flex flex-row space-x-2">
            <span v-if="blueAction" @click="$emit('onBlueAction', item)"
              class="cursor-pointer font-medium text-blue-500
               hover:underline">{{ blueAction }}</span>
            <span v-if="greenAction" @click="$emit('onGreenAction', item)"
              class="cursor-pointer font-medium text-green-500 hover:underline">{{ greenAction
              }}</span>
            <span v-if="redAction" @click="$emit('onRedAction', item)"
              class="cursor-pointer font-medium text-red-500 hover:underline">{{ redAction }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    filteredList: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    header: {
      type: Array,
    },
    blueAction: {
      type: String,
      default: null,
    },
    greenAction: {
      type: String,
      default: null,
    },
    redAction: {
      type: String,
      default: null,
    },
  },
  setup(props) {

    return {};
  },
};
</script>
