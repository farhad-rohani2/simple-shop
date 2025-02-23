import axios from "axios";

export default {
    namespaced: true,
    state: {
        visible: false,
        productId: null,
        product: null,
    },
    getters: {},
    mutations: {
        RESET(state) {
            state.visible = false;
            state.productId = null;
        },
        SET_VISIBLE(state, value) {
            state.visible = value;
        },
        SET_PRODUCT_ID(state, value) {
            state.productId = value;
        },
        SET_PRODUCT(state, value) {
            state.product = value;
        },
    },
    actions: {
        setVisible({ commit, state }, payload) {
            commit("SET_VISIBLE", payload);
        },
        setProductId({ commit, state }, payload) {
            commit("SET_PRODUCT_ID", payload);
        },
        async setProduct({ commit, state }, payload) {
            await axios
                .post("/api/blueberry/ad/"+payload.adId,{
                    uuid:payload.uuid
                })
                .then(({ data:{data} }) => {
                    commit("SET_PRODUCT", data);
                })
                .catch((data) => {
                });

        },

    },
};
