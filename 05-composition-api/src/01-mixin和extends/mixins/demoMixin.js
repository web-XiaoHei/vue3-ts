export const demoMixin = {
    data() {
        return {
            message: "Hello DemoMixin"
        }
    },
    methods: {
        foo() {
            console.log("demo mixin foo");
        }
    },
    created() {
        // this.foo()
        console.log("执行了demo mixin created");
    }
}