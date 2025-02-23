import axios from "axios";

export default {
    namespaced: true,
    state: {
        loading: false,
    },
    getters: {

    },
    mutations: {
        RESET(state) {
            state.loading= false
        },
        SET_LOADING(state, value) {
            state.loading = value;
        },
    },
    actions: {

    },
};
