<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="why">
      <h2 v-if="isShow" class="title">Hello World</h2>
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
}

.why-enter-active {
  animation: bounce 1s ease;
}
.why-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
