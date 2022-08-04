<template>
  <div>
    <h2>当前计数:{{ counter }}</h2>
    <counter-operation
      @add="addOne"
      @sub="subOne"
      @addN="addNum"
    ></counter-operation>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    CounterOperation,
  },
  methods: {
    addOne() {
      this.counter++;
    },
    subOne() {
      this.counter--;
    },
    addNum(num, name, age) {
      console.log(num, name, age);
      this.counter += num;
    },
  },
};
</script>

<style scoped></style>
