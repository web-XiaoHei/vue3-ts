<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { counter: 100 });
    },
    decrement() {
      // 派发风格对象类型
      this.$store.dispatch({
        type: "decrementAction",
        name: "why",
      });
    },
  },
  mounted() {
    this.$store.dispatch("getHomeMultidata");
  },
  setup() {},
};
</script>

<style scoped></style>
