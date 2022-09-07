<template>
  <div>
    <h2>root:{{ $store.state.rootCounter }}</h2>
    <h2>Home:{{ $store.state.home.homeCounter }}</h2>
    <h2>User:{{ $store.state.user.userCounter }}</h2>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped></style>
