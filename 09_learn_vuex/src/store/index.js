import { createStore } from 'vuex'
import homeModule from './modules/home';
import userModule from './modules/user';

const store = createStore({

    state() {
        return {
            rootCounter: 0
        }
    },
    mutations: {
        increment(state) {
            state.rootCounter++
        }
    },
    getters: {
        dobleRootCounter(state) {
            return state.rootCounter + 2
        }
    },
    modules: {
        home: homeModule,
        user: userModule
    }
})

export default store;