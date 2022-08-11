<template>
  <div>Nav组件</div>
  <button @click="getParentAndRoot">获取父组件和根组件</button>
</template>

<script>
export default {
  data() {
    return {
      message: "爱我中华",
    };
  },
  methods: {
    sayHello() {
      console.log("Hello World");
    },
    getParentAndRoot() {
      console.log(this.$parent);
      console.log(this.$root);
    },
  },
};
</script>

<style scoped></style>
