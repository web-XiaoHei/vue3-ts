<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>home的内容1</li>
      <li>home的内容2</li>
      <li>home的内容3</li>
      <li>home的内容4</li>
      <li>home的内容5</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/product">商品</router-link>
    <router-link to="/home/moment">moment</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
