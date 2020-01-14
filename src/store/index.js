import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

Vue.use(Vuex);//for communication between Vuex and Vue

export default new Vuex.Store({
    modules: {
        auth: auth

    }
});