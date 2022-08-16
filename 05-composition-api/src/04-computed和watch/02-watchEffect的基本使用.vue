<template>
  <div>
    <h2>{{ name }}--{{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // watchEffect：自动收集响应式依赖
    const name = ref("why");
    const age = ref(18);
    const changeName = () => (name.value = "kobe");
    const changeAge = () => age.value++;

    watchEffect(() => {
      console.log("name:", name.value), "age:", age.value;
    });
    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
