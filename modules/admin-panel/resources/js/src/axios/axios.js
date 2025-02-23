import axios from 'axios';
import store from "../store/index.js";


axios.interceptors.request.use(
    (config) => {
        if (store.state.auth.user.token) {
            config.headers.Authorization =
                "Bearer " + store.state.auth.user.token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.request.use(config => {
    store.commit('loader/SET_LOADING',true);
    return config;
}, error => {
    store.commit('loader/SET_LOADING',false);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    store.commit('loader/SET_LOADING',false);
    return response;
}, error => {
    store.commit('loader/SET_LOADING',false);
    return Promise.reject(error);
});

export default axios;
