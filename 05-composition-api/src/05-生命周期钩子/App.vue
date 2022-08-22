<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    onMounted(() => console.log("app mounted1"));
    onMounted(() => console.log("app mounted2"));

    onUpdated(() => console.log("app onUpdated"));
    onUnmounted(() => console.log("app onUnmounted"));

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
