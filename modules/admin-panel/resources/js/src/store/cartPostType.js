import axios from "axios";

export default {
    namespaced: true,
    state: {
        cartPostTypes: [],
        selectedCartPostType: {},
    },
    getters: {},
    mutations: {
        RESET(state) {
            state.cartPostTypes.length = 0;
            state.selectedCartPostType = {};
        },
        SET_CART_POST_TYPES(state, value) {
            state.cartPostTypes = value;
        },
        SET_SELECTED_CART_POST_TYPE(state, value) {
            state.selectedCartPostType = value;
        },
    },
    actions: {
        async index({ commit, state }, payload) {
            await axios
                .get("/api/cart/postType")
                .then(({ data }) => {
                    commit("SET_CART_POST_TYPES", data);
                })
                .catch(({ response: { data } }) => {});
        },
        async select({ commit, state, rootState }, payload) {
            commit("SET_SELECTED_CART_POST_TYPE", payload);

            await axios
                .post("/api/cart/postType", {
                    condition_id: payload.id,
                    address_id: rootState.address.selectedAddress?.id,
                })
                .then(({ data }) => {
                    commit("cart/SET_CART", data.data, { root: true });
                })
                .catch(({ response: { data } }) => {
                    commit("SET_SELECTED_CART_POST_TYPE", {});
                });
        },
    },
};
