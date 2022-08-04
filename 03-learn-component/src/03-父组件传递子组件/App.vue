<template>
  <div>
    <show-message
      id="abc"
      class="why"
      title="哈哈哈哈"
      content="我是哈哈哈"
      message-info="hhah"
      :propF="title"
    ></show-message>
    <show-message
      title="呵呵呵"
      content="我是呵呵呵呵"
      :propF="title"
    ></show-message>
    <show-message
      :title="title"
      :content="content"
      :propF="title"
    ></show-message>

    <show-message
      :title="message.title"
      :content="message.content"
      :propF="title"
    ></show-message>

    <show-message v-bind="message" :propF="popf"></show-message>

    <multi-root-element class="multi"></multi-root-element>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MultiRootElement from "./MultiRootElement.vue";
export default {
  components: {
    ShowMessage,
    MultiRootElement,
  },
  data() {
    return {
      title: "嘻嘻嘻",
      content: "我是嘻嘻嘻",
      message: {
        title: "呵呵呵",
        content: "我是呵呵呵",
      },
      popf: "success",
    };
  },
};
</script>

<style scoped>
.mulit {
  color: red;
  font-size: 24px;
}
</style>
