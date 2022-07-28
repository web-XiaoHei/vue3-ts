const { priceFormat } = require('./js/format')

import { sum } from './js/math'
import "./js/element"
import { createApp } from "vue"

const message = "Hello World"
const names = ["abc", "cba", "nba"]

names.forEach(item => console.log(item))


createApp({
    template: `<h2>我是vue渲染出来的</h2>`
}).mount("#app")

console.log(sum(20, 30));

console.log(priceFormat());