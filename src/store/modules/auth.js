import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null

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
    },

    login: function () {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        //window.loction.has is 2nd arg to this func
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
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