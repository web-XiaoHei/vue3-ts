<script>
import { h, ref } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  setup() {
    const counter = ref(0);

    return () => {
      return h("div", { class: "app" }, [
        h(HelloWorld, null, {
          default: (props) =>
            h("span", null, `app传入到HelloWorld中的内容:${props.name}`),
        }),
      ]);
    };
  },
};
</script>

<style scoped></style>
