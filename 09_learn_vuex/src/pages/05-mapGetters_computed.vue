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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["nameInfo", "ageInfo", "heightInfo"]),
    // 注意和mapState区别
    // ...mapGetters({
    //   SnameInfo: "nameInfo",
    //   SageInfo: "ageInfo",
    //   SheightInfo: "heightInfo",
    // }),
  },
};
</script>

<style scoped></style>
