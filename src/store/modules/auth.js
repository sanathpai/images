const state = {
    token: null

};
const getters = {//used to query over state basically sort or compute
    isLoggedIn: function (state)=> {
    return !!state.token//!! =easy way to tearn a value into token
}
};
const actions = {
    logout: function ({ commit }) {//commit is used to multi mutations easily
        commit('setToken', null);
    }

};
const mutations = {
    setToken: function (state, token)=> {
    state.token = token;

}
};