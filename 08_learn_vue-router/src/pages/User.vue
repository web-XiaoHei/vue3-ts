<template>
  <div>
    <h2>User界面:{{ $route.params.id }}---{{ $route.params.username }}</h2>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  created() {
    console.log(this.$route, "this.$route");
  },
  setup() {
    const route = useRoute();
    console.log(route.params.id);
    return {
      route,
    };
  },
};
</script>

<style scoped></style>
