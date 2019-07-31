import Vuex from 'vuex';
import Vue from 'vue';
import firstModule from './modules/firstModule';
import secondModule from './modules/secondModule';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        f : firstModule,
        g : secondModule
    }
})