import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'
import loader from './loader.js'
import productCategory from "./product-category.js";
import product from "./product.js";
import order from "./order.js";
import user from "./user.js";



const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        auth,
        loader,
        productCategory,
        product,
        order,
        user
    },
    actions: {
        resetAll({ state, commit }, payload) {
            commit("auth/RESET", null, { root: true });
            commit("loader/RESET", null, { root: true });
            commit("productCategory/RESET", null, { root: true });
            commit("product/RESET", null, { root: true });
            commit("user/RESET", null, { root: true });
            localStorage.clear();
        },
    },
});

export default store
