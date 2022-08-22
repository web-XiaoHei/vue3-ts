<template>
  <div>
    <input type="text" v-focus />
    <button
      v-if="counter < 2"
      v-hei:warning.ac="'webXiaohei'"
      @click="changeCounter"
    >
      当前计数:{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {
    // 局部自定义指令
    focus: {
      created(el, bindings, vnode, prevnode) {
        console.log(el, bindings, vnode, prevnode);
      }, //在绑定元素的attribute或事件监听器被应用之前调用
      beforeMounted() {},
      mounted(el, bindings, vnode, prevnode) {
        console.log("focus mounted");
        el.focus();
      },
    },
    hei: {
      created(el, bindings, vnode, prevnode) {
        console.log(el, bindings, vnode, prevnode);
        console.log(bindings.arg, "自定义指令的参数名");
        console.log(bindings.value, "自定义指令绑定的值");
        console.log(bindings.modifiers, "修饰符");
        console.log("hei created");
      },
      beforeMounted() {
        console.log("hei beforeMounted");
      },
      mounted() {
        console.log("hei mounted");
      },
      beforeMounted() {
        console.log("hei beforeMounted");
      },
      beforeUpdate() {
        console.log("hei beforeUpdate");
      },
      updated() {
        console.log("hei updated");
      },
      beforeUnmount() {
        console.log("hei beforeUnmount");
      },
      unmounted() {
        console.log("hei unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);
    const changeCounter = () => {
      counter.value++;
    };
    return {
      counter,
      changeCounter,
    };
  },
};
</script>

<style scoped></style>
