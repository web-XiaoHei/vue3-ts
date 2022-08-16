<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    data() {
      return {
        counter: 100,
      };
    },
  },
  /* 
  参数一：props,父组件传递过来属性
   */
  // setup(props, context) {
  //   console.log(props, "props");
  //   console.log(context, "context");
  //   context.attrs  context.slots  context.emit
  // },
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);
  },
};
</script>

<style scoped></style>
