import axios from "axios";

export default {
    namespaced: true,
    state: {
        cart: {},
        currentProductId: null,
        cartSidebarIsOpen: false,
    },
    getters: {
        product(state) {
            let cartItem = state.cart?.products?.find(function (item) {
                return item.cartable_id === state.currentProductId;
            });

            if (!cartItem) {
                return {
                    quantity: 0,
                };
            }
            return cartItem;
        },
        products(state) {
            return state.cart.products;
        },
        productIds(state) {
            let list=[]
            state.cart.products?.forEach(function (item) {
                list.push(item.cartable.id) ;
            });
            return list;
        },
        cart(state) {
            return state.cart;
        },
        cartSidebarIsOpen(state) {
            return state.cartSidebarIsOpen;
        },
    },
    mutations: {
        RESET(state) {
            state.cart = {};
            state.currentProductId = null;
        },
        SET_CART(state, value) {
            state.cart = value;
        },
        SET_CURRENT_PRODUCT_ID(state, value) {
            state.currentProductId = value;
        },
        SET_CART_SIDEBAR_IS_OPEN(state, value) {
            state.cartSidebarIsOpen = value;
        },
    },
    actions: {
        exist({ commit, state, getters }, payload) {
            getters.productIds.include(payload);
        },
        setCartSidebarIsOpen({ commit, state }, payload) {
            commit("SET_CART_SIDEBAR_IS_OPEN", payload);
        },
        setCurrentProductId({ commit, state }, payload) {
            commit("SET_CURRENT_PRODUCT_ID", payload.productId);
        },
        removeCart({ commit }) {
            commit("SET_CART", {});
        },
        async show({ commit, state }, payload) {
            await axios
                .post("/api/cart", {
                    cartType: "wishlist",
                })
                .then(({ data }) => {
                    console.log(data);
                    commit("SET_CART", data.data);
                    commit(
                        "cartPostType/SET_SELECTED_CART_POST_TYPE",
                        data.data.selectedPost,
                        { root: true },
                    );
                })
                .catch(({ response: { data } }) => {});
        },

        async add({ commit, state }, productId) {
            await axios
                .post("/api/cart/product/add", {
                    productId: productId ?? state.currentProductId,
                    cartType: "wishlist",
                })
                .then(({ data }) => {
                    commit("SET_CART", data.data);
                })
                .catch(({ response: { data } }) => {});
        },
        async removeForce({ commit, state }, productId) {
            await axios
                .post("/api/cart/product/removeForce", {
                    productId: productId ?? state.currentProductId,
                    cartType: "wishlist",
                })
                .then(({ data }) => {
                    commit("SET_CART", data.data);
                })
                .catch(({ response: { data } }) => {});
        },
        async removeUntilOne({ commit, state }, productId) {
            await axios
                .post("/api/cart/product/removeUntilOne", {
                    productId: productId ?? state.currentProductId,
                    cartType: "wishlist",
                })
                .then(({ data }) => {
                    commit("SET_CART", data.data);
                })
                .catch(({ response: { data } }) => {});
        },
        async pay({ commit, state }, payload) {
            await axios
                .get("/api/cart/pay")
                .then(({ data }) => {
                    window.location.replace(data.action);
                })
                .catch(({ response: { data } }) => {});
        },
    },
};
