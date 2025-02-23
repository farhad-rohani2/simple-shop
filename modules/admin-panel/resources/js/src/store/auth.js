import axios from "axios";
// import router from '@/router'

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {},
        allowToSendOtp: false,
        countDown: 0,
    },
    getters: {
        authenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        },
        allowToSendOtp(state) {
            return state.allowToSendOtp;
        },
        countDown(state) {
            return state.countDown;
        },
    },
    mutations: {
        RESET(state) {
            state.authenticated = false;
            state.user = {};
            state.allowToSendOtp = false;
            state.countDown = 0;
        },
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
        SET_USER(state, value) {
            state.user = value;
        },
        SET_ALLOW_TO_SEND_OTP(state, value) {
            state.allowToSendOtp = value;
            if (value) {
                state.countDown = 120;
            }
        },
        SET_COUNT_DOWN(state, value) {
            state.countDown = value;
        },
    },
    actions: {
        setAllowToSendOtp({ commit }, payload) {
            commit("SET_ALLOW_TO_SEND_OTP", payload);
        },
        setCountDown({ commit }, payload) {
            commit("SET_COUNT_DOWN", payload);
        },
        async sendOtp({ commit }, payload) {
            commit("SET_ALLOW_TO_SEND_OTP", false);
            // await axios.get('/sanctum/csrf-cookie')
            await axios
                .post("/api/otp", payload)
                .then(({ data }) => {})
                .catch(({ response: { data } }) => {
                    commit("SET_ALLOW_TO_SEND_OTP", true);
                });
        },
        async login({ commit }, payload) {
            await axios.get("/sanctum/csrf-cookie");
            await axios
                .post("/api/blueberry/auth/login", payload)
                .then(({ data }) => {
                    commit("SET_USER", data);
                    commit("SET_AUTHENTICATED", true);
                    // router.push({name: 'index'})
                })
                .catch(({ response: { data } }) => {
                    commit("SET_USER", {});
                    commit("SET_AUTHENTICATED", false);
                });
        },
        async logout({ commit }) {
            await axios
                .post("/api/blueberry/auth/logout")
                .then(({ data }) => {
                    commit("SET_USER", {});
                    commit("SET_AUTHENTICATED", false);
                    // router.push({name: 'index'})
                })
                .finally(() => {
                    commit("SET_USER", {});
                    commit("SET_AUTHENTICATED", false);
                    // router.push({name: 'index'})
                });
        },
        async register({ commit }, payload) {
            await axios.get("/sanctum/csrf-cookie");
            await axios
                .post("/api/blueberry/auth/register", payload)
                .then(({ data }) => {
                    // commit('SET_USER', data)
                    // commit('SET_AUTHENTICATED', true)
                    // router.push({name: 'index'})
                })
                .catch(({ response: { data } }) => {
                    commit("SET_USER", {});
                    commit("SET_AUTHENTICATED", false);
                });
        },
    },
};
