import api from '../../api/imgur';


const state = {
    token: null

};


const getters = {
    //used to query over state basically sort or compute
    isLoggedIn: function (state)=> {
    return !!state.token
    //!! =easy way to tearn a value into token
}
};

const actions = {
    logout: function ({ commit }) {//commit is used to multi mutations easily
        commit('setToken', null);
    },

    login: () => { api.login(); }

};
const mutations = {
    setToken: function (state, token) => {
    state.token = token;

}
};
export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}