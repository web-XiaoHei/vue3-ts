<template>
  <div id="app">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link
      to="/home"
      active-class="router-link-active"
      v-slot="props"
      custom
    >
      <!-- <nav-bar :title="首页"></nav-bar> -->
      <button @click="props.navigate">{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isActive }">{{ props.isExactActive }}</span>
      <!-- <p>{{props.route}}</p> -->
    </router-link>
    <router-link to="/about" active-class="router-link-active"
      >关于</router-link
    >
    <router-link
      to="/user/xiaohei/username/superweb"
      active-class="router-link-active"
      >用户</router-link
    >
    <router-link to="/category" active-class="router-link-active"
      >分类</router-link
    >
    <router-view v-slot="props">
      <transition name="why">
        <component :is="props.Component"></component>
      </transition>
    </router-view>

    <button @click="jumpToAbout">jumpToAbout</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about");
    // },
  },
  components: {
    NavBar,
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
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
