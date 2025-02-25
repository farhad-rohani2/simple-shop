import axios from "axios";

export default {
    namespaced: true,
    state: {
        user: {},
        authenticated: false,
        errorMessage: "", //To display the login or registration errors
    },
    getters: {
        user(state) {
            return state.user;
        },
        errorMessage(state) {
            return state.errorMessage;
        },
    },
    mutations: {
        RESET(state) {
            state.authenticated = false;
            state.user = {};
            state.errorMessage = "";
        },
        SET_USER(state, value) {
            state.user = value;
            state.authenticated = true;
            state.errorMessage = "";
        },
        SET_ERROR(state, error) {
            state.errorMessage = error;
        },
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
    },
    actions: {
        async login({ commit }, payload) {
            commit("SET_ERROR", "");
            try {
                await axios.get("/sanctum/csrf-cookie");
                let response = await axios.post("/api/auth/login", payload);
                commit("SET_USER", response.data);
                commit("SET_AUTHENTICATED", true);
            } catch (error) {
                let message = "Invalid credentials or error occurred.";
                if (error.response && error.response.data && error.response.data.message) {
                    message = error.response.data.message;
                }
                commit("SET_ERROR", message);
                commit("SET_AUTHENTICATED", false);
            }
        },
        async register({ commit }, payload) {
            commit("SET_ERROR", "");
            try {
                await axios.get("/sanctum/csrf-cookie");
                let response = await axios.post("/api/auth/register", payload);
                commit("SET_USER", response.data);
                commit("SET_AUTHENTICATED", true);
            } catch (error) {
                let message = "Registration failed.";
                if (error?.response?.data?.message) {
                    message = error.response.data.message;
                }
                commit("SET_ERROR", message);
                commit("SET_AUTHENTICATED", false);
            }
        },
        async logout({ commit }) {
            await axios.post("/api/auth/logout");
            commit("RESET");
        },
    },
};
