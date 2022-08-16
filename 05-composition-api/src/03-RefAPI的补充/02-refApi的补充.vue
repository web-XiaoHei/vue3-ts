<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">changeInfo</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  setup() {
    // const info = ref({ name: "why" });

    const info = shallowRef({ name: "why" });
    const changeInfo = () => {
      info.value.name = "james";
      //   triggerRef手动触发shallowRef相关的副作用
      triggerRef(info);
    };
    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
