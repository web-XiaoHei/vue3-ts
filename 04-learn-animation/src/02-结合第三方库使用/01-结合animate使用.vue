<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__flipInY"
    >
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}

.title {
  display: inline-block;
  transform: translateX(100px);
}

.animate__flipInY {
  animation-direction: reverse;
}
</style>
