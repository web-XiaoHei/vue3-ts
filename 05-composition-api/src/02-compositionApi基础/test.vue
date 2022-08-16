<template>
  <div>
    <div
      class="container"
      title="哈哈哈"
      @mouseEnter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      哈哈哈哈
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 100,
    };
  },
  methods: {
    mouseEnter() {
      console.log("鼠标移入事件");
      const container = document.querySelector(".container");
      setTimeout(function () {
        console.log("触发了");
        container.title = "呵呵呵呵";
        container.style.backgroundColor = "blue";
      }, 2000);
    },
    mouseLeave() {
      const container = document.querySelector(".container");
      console.log(container);
      container.title = "";
    },
  },
};
</script>

<style scoped>
.container {
  height: 200px;
  background-color: red;
}
</style>
