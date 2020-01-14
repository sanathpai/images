import api from '../../api/imgur';

const state = {
    images: []

};

const getters = {
    allImages: function (state) {
        state.images
    }

};

const actions = {
    async fetchImages({ rootState, commit }) {
        //rootstate gives ability to reach into other modules for ex to get token from auth.js
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data)//first is axios data then its imgurs data that is returned check network tab in ctrl+shift+i
            ;
    }
};
const mutations = {
    setImages: function (state, images) {
        state.images = images;
    }
};
export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations

};
