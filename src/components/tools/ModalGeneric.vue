<template>
  <div
    @click.self="clickOn"
    class="fixed right-0 left-0 top-0 bottom-0 bg-opacity-60 bg-gray-300 z-40"
  >
    <transition
      appear
      :enter-active-class="'animated ' + animate"
      leave-active-class="animated rotateOutDownLeft"
    >
      <div
        :style="'width: ' + maxWidth + 'px'"
        class="relative bg-gray-100 dark:bg-gray-700 mx-auto h-auto mt-20 rounded"
      >
        <div
          class="flex items-center bg-blue-400 dark:bg-blue-500 h-9 justify-between rounded-t"
        >
          <p class="ml-2 font-medium text-lg text-black">{{ title }}</p>
          <span
            @click="clickOn"
            class="mr-1 px-3 py-1 cursor-pointer text-black
             hover:bg-gray-400 hover:bg-opacity-30 rounded-full"
          >
            <font-awesome-icon
              class="text-lg text-gray-900 dark:text-white"
              icon="close"
            />
          </span>
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
  name: "ModalGeneric",

  emits: ["closeModal"],

  props: {
    title: {
      type: String,
      default: "Title",
    },
    maxWidth: {
      type: String,
      default: "800",
    },
    animate: {
      type: String,
      default: "fadeIn",
    },
    // mTop: {
    //   type: Number,
    //   default: "20",
    // },
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
