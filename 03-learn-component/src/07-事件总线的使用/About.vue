<template>
  <div>
    <button @click="btnClick">ABOUT</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  methods: {
    btnClick() {
      console.log("about按钮的点击");
      emitter.emit("why", { name: "kobe", age: 18 });
      emitter.emit("kobe", { name: "why", age: 18 });
    },
  },
};
</script>

<style lang="scss" scoped></style>
