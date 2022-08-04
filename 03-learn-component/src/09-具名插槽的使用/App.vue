<template>
  <div>
    <nav-bar :name="name">
      <!-- <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template v-slot:center>
        <h2>我是标题</h2>
      </template>
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
      <template v-slot:[name]>
        <i>why内容</i>
      </template> -->
      <!-- v-slot: 的语法糖 # -->
      <template #left>
        <button>左边的按钮</button>
      </template>
      <template #center>
        <h2>我是标题</h2>
      </template>
      <template #right>
        <i>右边的i元素</i>
      </template>
      <template #[name]>
        <i>why内容</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      name: "why",
    };
  },
};
</script>

<style scoped></style>
