export default {
    namespaced: true,
    state: {
        welcome: 'Hello there !',
        button_clicked: 0
    },
    getters: {
        welcome1: state => {
            return `this is coming from getters on second module ${state.welcome} and the button clicked ${state.button_clicked} times`
        },
        doubleAmount: state => {
            return state.button_clicked * 3
        }
    },
    mutations: {
        increment: state => {
            state.button_clicked++
        }
    },
    actions: {
        incrementTwice: (context) => {
            context.commit('increment')
            context.commit('increment')
        }
    }
}