<template>
  <div>
    <h2 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  directives: {},
  setup() {
    const timestamp = Date.parse(new Date());

    return {
      timestamp,
    };
  },
};
</script>

<style scoped></style>
