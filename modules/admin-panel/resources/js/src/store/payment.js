import axios from "axios";

export default {
    namespaced: true,
    state: {
        payment: {},
    },
    getters: {

    },
    mutations: {
        RESET(state) {
            state.payment= {}
        },
        SET_PAYMENT(state, value) {
            state.payment = value;
        },
    },
    actions: {


        async setPayment({ commit, state }, payload) {
            commit("SET_PAYMENT", window.blade.payment);
        },
    },
};
