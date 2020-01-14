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
    async fetchImages: function ({ rootState }) {//rootstate gives ability to reach into other modules for ex to get token from auth.js
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
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
