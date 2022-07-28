const { priceFormat } = require('./js/format')

import { sum } from './js/math'
import "./js/element"

const message = "Hello World"
const names = ["abc", "cba", "nba"]

names.forEach(item => console.log(item))


console.log(sum(20, 30));

console.log(priceFormat());