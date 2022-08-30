<template>
  <div id="app">
    <router-link to="/home" active-class="router-link-active">首页</router-link>
    <router-link to="/about" active-class="router-link-active"
      >关于</router-link
    >
    <router-link
      to="/user/xiaohei/username/superweb"
      active-class="router-link-active"
      >用户</router-link
    >

    <router-view />
    <button @click="jumpToAbout">jumpToAbout</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about");
    // },
  },
  setup() {
    const router = useRouter();
    const jumpToAbout = () => {
      //   router.push("/about");
      router.push({
        path: "/about",
        query: {
          age: 18,
          name: "xiaohei",
        },
      });
    };
    return {
      jumpToAbout,
    };
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>

<style scoped></style>
