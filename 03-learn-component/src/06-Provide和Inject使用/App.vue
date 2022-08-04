<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue";
export default {
  components: {
    Home,
  },
  provide() {
    // 当provide提供的数据来自data，需要将其写成函数返回对象的形式
    // 当要提供一个响应式时就需要写成computed的形式
    return {
      name: "why",
      age: 18,
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["abc", "cba", "nba"],
    };
  },
  methods: {
    addName() {
      this.names.push("Kobe");
      console.log(this.names);
    },
  },
};
</script>

<style scoped></style>
