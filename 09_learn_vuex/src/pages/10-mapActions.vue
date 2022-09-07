<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <hr />
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>

    <button @click="increment">+1 Increment</button>
    <button @click="decrement">+1 Increment</button>
    <hr />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // // ...mapActions(["incrementAction", "decrementAction"]),
    // ...mapActions({
    //   increment: "incrementAction",
    //   decrement: "decrementAction",
    // }),
  },
  mounted() {
    this.$store.dispatch("getHomeMultidata");
  },
  setup() {
    const actions = mapActions(["incrementAction", "decrementAction"]);
    const actions2 = mapActions({
      increment: "incrementAction",
      decrement: "decrementAction",
    });
    return {
      ...actions,
      ...actions2,
    };
  },
};
</script>

<style scoped></style>
