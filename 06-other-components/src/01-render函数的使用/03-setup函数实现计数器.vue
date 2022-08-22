<script>
import { h, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数：${this.counter}`),
        h("button", { onclick: () => this.counter++ }, "+1"),
        h("button", { onclick: () => this.counter-- }, "-1"),
      ]);
    };
  },
};
</script>

<style scoped></style>
