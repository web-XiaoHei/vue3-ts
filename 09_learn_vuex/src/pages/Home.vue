<template>
  <div>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>

    <button @click="increment">home+1</button>
    <button @click="incrementAction">homeAction+1</button>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutaitions, mapActions } from "vuex";
import { createNamespacedHelpers } from "vuex";
import { useState, useGetters } from "../hooks";
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("home");
export default {
  computed: {
    // 写法一：
    // ...mapState({
    //   homeCounter: (state) => state.home.homeCounter,
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: "home/doubleHomeCounter",
    // }),
    // 写法二
    // ...mapState("home", ["homeCounter"]),
    // ...mapGetters("home", ["doubleHomeCounter"]),
    // 写法三
    ...mapState(["homeCounter"]),
    ...mapGetters(["doubleHomeCounter"]),
  },
  setup() {
    // {homeCounter: function}
    // const state = useState(["rootCounter"])
    // const rootGetters = useGetters(["doubleRootCounter"])
    // const getters = useGetters("home", ["doubleHomeCounter"])

    // const mutations = mapMutations(["increment"])
    // const actions = mapActions(["incrementAction"])

    return {
      // ...state,
      // ...getters,
      // ...rootGetters
      // ...mutations,
      // ...actions
    };
  },
};
</script>

<style scoped></style>
