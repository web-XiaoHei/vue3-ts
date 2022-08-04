<template>
  <div>HOME-CONTENTS</div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  created() {
    emitter.on("why", (info) => {
      console.log(info);
    });
    emitter.on("kobe", (info) => {
      console.log("kobe:", info);
    });

    emitter.on("*", (type, info) => {
      console.log("* listener:", type, info);
    });

    // 取消emitter中的所有的监听
    emitter.all.clear();

    // 取消单个的
    emitter.off("why", () => {
      console.log("111");
    });
  },
};
</script>

<style scoped></style>
