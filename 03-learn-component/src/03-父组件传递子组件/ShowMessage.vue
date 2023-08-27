<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
    <p>{{ propF }}</p>
  </div>
</template>

<script>
export default {
  //   props: ["title", "content"],
  props: {
    // 多个可能的类型
    title: [String, Number],
    content: {
      type: String,
      required: false,
      default: "gogo",
    },
    info: {
      type: Object,
      //   对象或数组默认值必须从一个工厂函数获取
      default() {
        return { name: "why" };
      },
    },
    propF: {
      validator(value) {
        return ["success", "warning", "danger"].includes(value);
      },
    },
  },
  inheritAttrs: false,
};
</script>

<style scoped></style>
