<template>
  <div>
    <h2>{{ info }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeInfo">changeInfo</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    const info = reactive({ name: "why", age: 18 });
    // 1.侦听watch时，传入一个getter函数
    // watch(
    //   () => info.age,
    //   (newValue, oldValue) => {
    //     console.log("newValue:", newValue, "oldValue:", oldValue);
    //   }
    // );
    // 2.传入一个可响应的对象：reactive对象/ref对象

    // 情况一：reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // });
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );

    // 情况二: ref对象获取newValue和oldValue
    // const name = ref("why");
    // watch(name, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // });
    const changeInfo = () => {
      info.name = "james";
      info.age++;
      // name.value = "kobe";
    };
    return {
      name,
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
