import axios from "axios";
import {showSuccess, showError} from "../utils/swal";

export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {
    },
    mutations: {
        RESET(state) {
            state.users = [];
            state.errors = [];
        },
        SET_USERS(state, value) {
            state.users = value;
        },
    },
    actions: {
        async getUsers({commit, state}, payload) {
            await axios
                .get("/api/user")
                .then(({data}) => {
                    commit("SET_USERS", data);
                })
                .catch(({response: {error}}) => {
                    showError('❌ Error receiving users:', error)
                });
        },

    },
};
