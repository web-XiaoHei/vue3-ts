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
import { mapActions, useStore } from "vuex";
import { onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      const Promis = store.dispatch("getHomeMultidata");
      Promis.then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    });
  },
};
</script>

<style scoped></style>
