import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'
import cart from './cart.js'
import address from './address.js'
import cartPostType from './cartPostType.js'
import payment from './payment.js'
import loader from './loader.js'
import wishlist from "./wishlist.js";
import quickView from "@/store/quickView.js";
import adCategory from "@/store/adCategory.js";

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        auth,
        cart,
        wishlist,
        address,
        cartPostType,
        payment,
        loader,
        quickView,
        adCategory
    },
    actions: {
        resetAll({ state, commit }, payload) {
            commit("auth/RESET", null, { root: true });
            commit("cart/RESET", null, { root: true });
            commit("wishlist/RESET", null, { root: true });
            commit("address/RESET", null, { root: true });
            commit("cartPostType/RESET", null, { root: true });
            commit("payment/RESET", null, { root: true });
            commit("loader/RESET", null, { root: true });
            commit("quickView/RESET", null, { root: true });
            commit("adCategory/RESET", null, { root: true });
            localStorage.clear();
        },
    },
});

export default store
