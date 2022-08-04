<template>
  <div>
    <home-content></home-content>
    <div>HomeContent:{{ name }}-{{ age }}-{{ length }}</div>
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";
export default {
  inject: ["name", "age", "length"],

  components: {
    HomeContent,
  },
};
</script>

<style scoped></style>
