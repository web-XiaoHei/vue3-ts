export default {
    install(app) {
        // console.log(app);
        // 命名习惯：全局添加属性的时候$开头
        app.config.globalProperties.$name = "webXiaoHei"
    }
}