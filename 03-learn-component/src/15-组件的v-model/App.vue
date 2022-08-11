<template>
  <div>
    <!-- <input type="text" v-model="message" /> -->
    <!-- <input type="text" :value="message" @input="inputMth" /> -->
    <!-- <h2>{{ message }}</h2> -->

    <!-- 组件上使用v-model -->
    <!--  <hy-input
      :modelValue="message"
      @update:model-value="message = $event"
    ></hy-input> -->
    <hy-input
      :modelValue="message"
      @update:model-value="updateValue"
      :title="title"
      @update:title="updateTitle"
    ></hy-input>
    <!-- <hy-input v-model="message"></hy-input> -->

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import HyInput from "./HyInput.vue";
export default {
  components: { HyInput },
  data() {
    return {
      message: "Hello World",
      title: "Hello",
    };
  },
  methods: {
    inputMth(event) {
      this.message = event.target.value;
    },
    updateValue(event) {
      this.message = event;
    },
    updateTitle(event) {
      this.title = event;
    },
  },
};
</script>

<style scoped></style>
