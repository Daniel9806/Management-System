<template>
  <div
    @click.self="clickOn"
    class="fixed right-0 left-0 top-0 bottom-0 bg-opacity-60 bg-gray-300 z-40"
  >
    <transition
      appear
      enter-active-class="animated slideInRight faster"
      leave-active-class="animated slideOutRight"
    >
      <div
        :style="'width: ' + maxWidth + 'px'"
        class="absolute bg-gray-100 dark:bg-gray-700 right-0 h-screen"
      >
        <div
          class="flex items-center bg-main-color h-9 justify-between"
        >
          <p class="ml-2 font-medium text-lg text-black">{{ title }}</p>
          <!-- <span
            @click="clickOn"
            class="p-1 cursor-pointer material-icons text-black hover:bg-gray-400 hover:bg-opacity-30 rounded-full"
            >close</span
          > -->
        </div>
        <div class="p-2">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalUser",

  emits: ["closeModal"],

  props: {
    title: {
      type: String,
      default: "User Profile",
    },
    maxWidth: {
      type: String,
      default: "350",
    },
    
  },

  setup(_, context) {
    return {
      clickOn: () => {
        context.emit("closeModal");
      },
    };
  },
};
</script>
