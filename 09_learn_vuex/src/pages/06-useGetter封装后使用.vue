<template>
  <div>
    <h2>总价值：{{ Number($store.getters.totalPrice).toFixed(2) }}</h2>
    <h2>数量大于2:{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>

    <hr />
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>
  </div>
</template>

<script>
import { useGetters } from "../hooks";
export default {
  setup() {
    const storeGetters = useGetters(["nameInfo", "ageInfo", "heightInfo"]);
    return {
      ...storeGetters,
    };
  },
};
</script>

<style scoped></style>
