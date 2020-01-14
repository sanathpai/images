const state = {
    images: []

};

const getters = {
    allImages: function (state) {
        state.images
    }

};

const actions = {
    fetchImages: function () {

    }
};
const mutations = {
    setImages: function (state, images) {
        state.images = images;
    }
};

