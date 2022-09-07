const homeModule = {
    namespaced: true,
    state() {
        return {
            homeCounter: 100
        }
    },
    getters: {
        doubleHomeCounter(state) {
            console.log(state);
            return state.homeCounter * 2
        }
    },
    mutations: {
        increment(state) {
            state.homeCounter++
        }
    },
    actions: {
        incrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
            console.log('提交home下的incrementAction');
            commit("increment")
            commit("increment", null, { root: true })
            // dispatch
            dispatch("increment", null, { root: true })
        }
    }
}

export default homeModule