<template>
  <div>
    <h2>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</h2>
    <h2>{{ sCounter }}-{{ sName }}-{{ sAge }}-{{ sHeight }}</h2>
  </div>
</template>

<script>
import { useState } from "../hooks";
export default {
  setup() {
    const storeState = useState(["counter", "name", "age", "height"]);
    const storeState2 = useState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
      sAge: (state) => state.age,
      sHeight: (state) => state.height,
    });

    return {
      ...storeState,
      ...storeState2,
    };
  },
};
</script>

<style scoped></style>
