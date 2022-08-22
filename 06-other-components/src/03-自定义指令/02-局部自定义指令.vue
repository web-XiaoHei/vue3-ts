<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  directives: {
    // 局部自定义指令
    focus: {
      mounted(el, bindings, vnode, prevnode) {
        console.log("focus mounted");
        el.focus();
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
