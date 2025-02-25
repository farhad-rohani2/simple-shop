import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'
import loader from './loader.js'
import productCategory from "./product-category.js";
import product from "./product.js";


const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        auth,
        loader,
        productCategory,
        product
    },
    actions: {
        resetAll({ state, commit }, payload) {
            commit("auth/RESET", null, { root: true });
            commit("loader/RESET", null, { root: true });
            commit("productCategory/RESET", null, { root: true });
            commit("product/RESET", null, { root: true });
            localStorage.clear();
        },
    },
});

export default store
