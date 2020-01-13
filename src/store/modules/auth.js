import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')

};

const getters = {
    //used to query over state basically sort or compute
    isLoggedIn: function (state) {
        return !!state.token;
        //!! =easy way to tearn a value into token
    }
};


const actions = {
    logout: function ({ commit }) {//commit is used to multi mutations easily
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },

    login: function () {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        //window.loction.has is 2nd arg to this func
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        //for persistent login
    }
};


const mutations = {
    setToken: function (state, token) {
        state.token = token;

    }
};
export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}