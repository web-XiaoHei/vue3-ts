<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <!-- <h2>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</h2> -->
    <h2>{{ sCounter }}---{{ sName }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    fullName() {
      return "Kobe Bryant";
    },
    // 其他的计算属性，从state获取
    // 数组写法
    // ...mapState(["counter", "name", "age", "height"]),
    // 对象写法
    ...mapState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    }),
  },
};
</script>

<style scoped></style>
