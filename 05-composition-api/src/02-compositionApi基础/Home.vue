<template>
  <div>
    <button @click="updateState">修改状态</button>
    <h2>{{ info.counter }}</h2>
  </div>
</template>

<script>
import { readonly, reactive, ref } from "vue";

export default {
  setup() {
    // const counter = ref(100);
    // console.log(typeof counter); //object

    // 1.普通对象
    const info1 = { name: "why" };
    const readonlyInfo = readonly(info1);

    // 2.响应式的对象reactive
    const info2 = reactive({
      name: "why",
    });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式的对象ref
    const info3 = ref("why");
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      readonlyInfo3.value = "coderwhy";
      console.log(readonlyInfo3.value, "readonlyInfo3");
      info3.value = "coderwhy";
      console.log(info3.value, "info3");
    };

    return {
      updateState,
    };
  },
};
</script>

<style scoped></style>
