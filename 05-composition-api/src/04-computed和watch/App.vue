<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">changeData</button>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({ name: "why", age: 18, firends: { name: "kobe" } });

    // 2.侦听器watch
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log("newInfo:", newInfo, "oldInfo:", oldInfo);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const changeData = () => {
      info.name = "kobe";
    };
    return {
      changeData,
      info,
    };
  },
};
</script>

<style scoped></style>
