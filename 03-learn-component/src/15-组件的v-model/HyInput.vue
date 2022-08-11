<template>
  <div>
    <input type="text" v-model="value" />
    <input type="text" v-model="why" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },

    why: {
      set(value) {
        this.$emit("update:title", value);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped></style>
