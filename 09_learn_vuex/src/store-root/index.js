import { createStore } from 'vuex'
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 100,
            rootCounter: 100,
            name: 'web-xiaoHei',
            age: 18,
            height: 1.8,
            books: [
                { name: "深入Vuejs", price: 200, count: 3 },
                { name: "深入Webpack", price: 240, count: 5 },
                { name: "深入React", price: 130, count: 1 },
                { name: "深入Node", price: 220, count: 2 },
            ],
            discount: 0.6,
            banners: []
        }
    },
    getters: {
        doubleRootCounter(state) {
            return state.rootCounter * 2
        },
        totalPrice(state, getters) {
            let totalPrice = 0
            for (const book of state.books) {
                totalPrice += book.count * book.price
            }
            return totalPrice * getters.currentDiscount
        },
        currentDiscount(state) {
            return state.discount * 0.9
        },
        // getter如何传参：返回一个函数
        totalPriceCountGreaterN(state, getters) {
            return function (n) {
                let totalPrice = 0
                for (const book of state.books) {
                    if (book.count > n) {
                        totalPrice += book.count * book.price
                    }
                }
                return totalPrice * getters.currentDiscount
            }
        },
        nameInfo(state) {
            return `name: ${state.name}`
        },
        ageInfo(state) {
            return `age: ${state.age}`
        },
        heightInfo(state) {
            return `height: ${state.height}`
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        [INCREMENT_N](state, payload) {
            console.log(payload);
            state.counter += payload.n
        },
        addBannerData(state, payload) {
            state.banners = payload
        }
    },
    actions: {
        // actions传值放在第二个参数payload
        incrementAction(context, payload) {
            console.log(payload);
            setTimeout(() => {
                context.commit('increment')
            }, 3000)
        },
        // context内部包含什么？
        decrementAction({ commit, dispatch, getters, rootGetters, rootState, state }) {
            // console.log(context);
            /*  { 
             commit: function,
             dispatch:function,
             getters:{},
             rootGetters:{},
             rootState:{},
             state:{}
          } */
        },
        getHomeMultidata(context) {

            return new Promise((reslove, reject) => {
                axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
                    console.log(res.data.data.banner.list, "res");
                    context.commit("addBannerData", res.data.data.banner.list);
                    reslove({ name: 'xiaohei', age: 19 })
                }).catch(err => {
                    reject(err)
                });
            })

        }
    }
})

export default store;