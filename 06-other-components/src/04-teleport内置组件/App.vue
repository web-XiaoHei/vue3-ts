<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数{{ globalName }}</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#why">
      <span>呵呵呵呵</span>
    </teleport>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import { getCurrentInstance } from "vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const globalName =
      getCurrentInstance().appContext.config.globalProperties.$name;
    return {
      globalName,
    };
  },
  mounted() {
    console.log(this.$name);
  },
};
</script>
