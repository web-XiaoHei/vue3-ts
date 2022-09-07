<template>
  <div>
    <h2>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</h2>
    <h2>{{ sCounter }}-{{ sName }}-{{ sAge }}-{{ sHeight }}</h2>
    <h2>总价值：{{ Number($store.getters.totalPrice).toFixed(2) }}</h2>

    <hr />
    <h2>数量大于2:{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
  </div>
</template>

<script>
import { useState } from "../hooks/useState";
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
