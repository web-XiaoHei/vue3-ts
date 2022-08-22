<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "HelloWorld"),
      this.$slots.default
        ? this.$slots.default({ name: "coderwhy" })
        : h("span", null, "我是HelloWorld的插槽默认值"),
    ]);
  },
};
</script>

<style scoped></style>
