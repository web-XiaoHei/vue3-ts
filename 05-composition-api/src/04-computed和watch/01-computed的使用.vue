<template>
  <div>
    <h2>{{ fullNme }}</h2>
    <button @click="changeName">changeName</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");
    // 用法1：传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullNme = computed(() => {
    //   return firstName.value + " " + lastName.value;
    // });
    // 用法2：传入一个getter和setter
    const fullNme = computed({
      get: () => {
        return firstName.value + " " + lastName.value;
      },
      set: (newValue) => {
        const names = newValue.splite(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });
    const changeName = () => {
      firstName.value = "James";
    };
    return {
      fullNme,
      changeName,
    };
  },
};
</script>

<style scoped></style>
