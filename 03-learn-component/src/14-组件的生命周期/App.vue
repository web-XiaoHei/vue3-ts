<template>
  <div>
    <button @click="isShow = !isShow">切换</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: { Home },
  data() {
    return {
      isShow: true,
    };
  },
  beforeCreate() {
    console.log("APP beforeCreate");
  },
  created() {
    console.log("APP created");
  },
  beforeMount() {
    console.log("APP beforeMount");
  },
  mounted() {
    console.log("APP mounted");
  },
  beforeUnmount() {
    console.log("APP beforeUnmount");
  },
  unmounted() {
    console.log("APP unmounted");
  },
  beforeUpdate() {
    console.log(this.$refs.title ? this.$refs.title.innerHTML : "");
    console.log("APP beforeUpdate");
  },
  updated() {
    console.log(this.$refs.title ? this.$refs.title.innerHTML : "");
    console.log("APP updated");
  },
};
</script>

<style scoped></style>
