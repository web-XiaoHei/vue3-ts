<template>
  <div>
    App组件
    <home></home>
    <suspense>
      <template #defalut>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Hom.vue";
import Loading from "./Loading.vue";
// import AsyncCategory from "./AsyncCategory.vue";
// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCategory.vue"),
  loadingComponent: Loading,
  //   errorComponent:
  //   在显示loadingComponent组件之前，等待多长时间
  delay: 2000,
  // err:错误信息
  // retry：函数，调用和retry尝试重新加载
  // fail:函数，指示加载程序结束退出
  // attempts：记录尝试的次数
  onError: function (err, retry, fail, attempts) {
    if (err.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试3次
      retry();
    } else {
      // 注意：retry/fail 就像promise的resolve/reject一样“
      //必须调用其中一个才能继续错误处理
      fail();
    }
  },
  suspensible: true,
});

export default {
  components: {
    Home,
    AsyncCategory,
    Loading,
  },
  methods: {
    getSum() {
      // 通过improt函数导入的模块，后续webpack对其打包的时候就会进行分包的操作
      import("./utils/math").then((res) => {
        res.sum(20, 30);
      });
    },
  },
  created() {
    const result = this.getSum();
    console.log(result);
  },
};
</script>

<style scoped></style>
