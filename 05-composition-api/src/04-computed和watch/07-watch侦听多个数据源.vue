<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">changeData</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    // 1.定义可响应式的对象
    const info = reactive({ name: "why", age: 18 });
    const name = ref("why");

    // 2.侦听器watch
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(
          "newInfo:",
          newInfo,
          "newName:",
          newName,
          "oldInfo:",
          oldInfo,
          "oldName:",
          oldName
        );
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
