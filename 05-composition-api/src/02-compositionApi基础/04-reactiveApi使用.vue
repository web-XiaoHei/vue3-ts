<template>
  <div>
    Home Page
    <h2>当前计数: {{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // 局部函数
    const increment = () => {
      state.counter++;
    };
    const state = reactive({
      counter: 100,
    });

    return {
      state,
      title: "Hello World",
      increment,
    };
  },
};
</script>

<style scoped></style>
