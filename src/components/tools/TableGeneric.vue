<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left">
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
        <!-- Loop through the list get the each student data -->
        <tr class="border-t border-gray-400 dark:bg-neutral-800 dark:border-black
           hover:bg-gray-100 dark:hover:bg-neutral-700" v-for="item in filteredList" :key="item">
          <td class="py-3 px-6" v-for="field in fields" :key="field">
            {{ item[field] }}
          </td>
          <!-- ACTIONS -->
          <td class="py-2.5 px-6 space-x-2">
            <span v-if="blueAction" @click="$emit('onBlueAction', item)"
              class="cursor-pointer font-medium text-blue-400 dark:text-blue-500
               hover:underline">{{ blueAction }}</span>
            <span v-if="greenAction" @click="$emit('onGreenAction', item)"
              class="cursor-pointer font-medium text-green-400 dark:text-green-500 hover:underline">{{ greenAction
              }}</span>
            <span v-if="redAction" @click="$emit('onRedAction', item)"
              class="cursor-pointer font-medium text-red-400 dark:text-red-400 hover:underline">{{ redAction }}</span>
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
