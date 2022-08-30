<template>
  <div>
    <h2>About:{{ $route.query.name }}---{{ $route.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped></style>
