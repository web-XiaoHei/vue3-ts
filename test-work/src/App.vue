<!-- eslint-disable @typescript-eslint/ban-ts-ignore -->
<template>
  <div v-if="id" :id="id"></div>
</template>

<script lang="ts">
import "@toast-ui/editor/dist/i18n/zh-cn.js";
import "@toast-ui/editor/dist/toastui-editor.css";
// import Editor, { EditorCore } from "@toast-ui/editor";
import { reactive } from "@vue/reactivity";
import { defineComponent, onMounted, ref } from "vue";
import { nextTick } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "ToastuiEditor",
  props: ["id", "height", "initialEditType"],
  setup(props) {
    const editorText = ref("This is initialValue.");
    const editorOptions = reactive({
      hideModeSwitch: true,
    });
    // 压缩方法
    const dealImage = (
      base64: string,
      w: number,
      callback: { (arg2: any, e: any): void; (arg0: string): void }
    ) => {
      const newImage = new Image();
      // 压缩系数0-1之间
      let quality = 0.6;
      newImage.src = base64;
      newImage.setAttribute("crossOrigin", "Anonymous"); // url为外域时需要
      let imgWidth, imgHeight;
      newImage.onload = function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        imgWidth = this.width;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        imgHeight = this.height;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
          if (imgWidth > imgHeight) {
            canvas.width = w;
            canvas.height = (w * imgHeight) / imgWidth;
          } else {
            canvas.height = w;
            canvas.width = (w * imgWidth) / imgHeight;
          }
        } else {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          quality = 0.6;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        const ba = canvas.toDataURL("image/jpeg", quality); // 压缩语句
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        // while (base64.length / 1024 > 150) {
        //     quality -= 0.01;
        //     base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        // while (base64.length / 1024 < 50) {
        //     quality += 0.001;
        //     base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        callback(ba); // 必须通过回调函数返回，否则无法及时拿到该值
      };
    };

    const fileOrBlobToDataURL = (
      obj: Blob,
      cb: {
        (dataurl: string, obj: { size: number }): void;
        (arg0: any, arg1: any): void;
      }
    ) => {
      const a: FileReader = new FileReader();

      a.readAsDataURL(obj);
      a.onload = (e: any) => {
        cb(e.target.result, obj);
      };
    };

    const blobToImage = (blob: any, callback: (arg0: string) => void) => {
      return fileOrBlobToDataURL(
        blob,
        function (dataurl: string, obj: { size: number }) {
          // const img = new Image();

          // 获取大小,大于2兆缩小操作
          // console.log((obj.size / 1048576).toFixed(2))
          if (Number((obj.size / 1048576).toFixed(2)) > 2) {
            dealImage(dataurl, 1200, (e: string) => {
              dataurl = e;
              callback(dataurl);
            });
          } else {
            callback(dataurl);
          }
        }
      );
    };
    let currentEditor: any;
    const setHTML = (value: string) => {
      if (currentEditor) {
        currentEditor.setHTML(value);
      }
    };
    const getHTML = () => {
      if (currentEditor) {
        return currentEditor.getHTML();
      }
    };
    onMounted(() => {
      nextTick(() => {
        currentEditor = new Editor({
          language: "zh-CN",
          el: document.querySelector("#" + props.id) as HTMLElement,
          height: props.height ? props.height : "400px",
          initialEditType: props.initialEditType
            ? props.initialEditType
            : "wysiwyg",
          hooks: {
            addImageBlobHook: (blob: any, callback: (arg0: string) => void) => {
              // 查询有现有文本含有多少张图片

              const re = /<img[^>]+src="[^"]+"[^>]*>/gim; // 创建正则表达式模式。; // 声明变量。
              const text = currentEditor!.getHTML();
              const r = text.match(re) || []; // 尝试去匹配搜索字符串。

              if (r.length >= 10) {
                ElMessage({
                  message: "最多十张",
                  type: "warning",
                });
              } else {
                blobToImage(blob, callback);
              }
            },
          },
        }) as Editor;
      });
    });

    return {
      editorText,
      editorOptions,
      currentEditor,
      setHTML,
      getHTML,
    };
  },
});
</script>

function e(e: any, arg1: string) { throw new Error('Function not implemented.')
}
