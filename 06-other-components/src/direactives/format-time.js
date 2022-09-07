import dayjs from "dayjs"
export default function registerFormatTime(app) {
    app.directive("format-time", {
        mounted(el, bindings) {

            bindings.formatString = bindings.value

            bindings.formatString ? bindings.formatString : "YYYY-MM-DD HH:mm:ss"
            const textContent = el.textContent

            const timestamp = parseInt(textContent)
            if (textContent.length === 10) {
                timestamp = timestamp * 1000
            }

            el.textContent = dayjs(timestamp).format(bindings.formatString)
        }
    })
}