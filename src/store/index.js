import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';
Vue.use(Vuex);//for communication between Vuex and Vue

export default new Vuex.Store({
    modules: {
        auth: auth,
        images: images

    }
});