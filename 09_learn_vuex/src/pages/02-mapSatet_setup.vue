<template>
  <div>
    <!-- <h2>Home:{{ $store.state.counter }}</h2> -->

    <h2>{{ counter }}-{{ name }}-{{ age }}-{{ height }}</h2>
    <h2>sCounter:{{ sCounter }}---sName:{{ sName }}</h2>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { mapState, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const sCounter = computed(() => store.state.counter);
    const sName = computed(() => store.state.name);

    const storeStateFns = mapState(["counter", "name", "age", "height"]);
    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store });
      storeState[fnKey] = computed(fn);
    });

    return {
      sCounter,
      sName,
      ...storeState,
    };
  },
};
</script>

<style scoped></style>
