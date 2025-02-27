import axios from "axios";
import Swal from 'sweetalert2'
import {showError, showSuccess} from "../utils/swal.js";
export default {
    namespaced: true,
    state: {
        categories: [],
    },
    getters: {

    },
    mutations: {
        RESET(state) {
            state.categories = [];
        },
        SET_CATEGORIES(state, value) {
            state.categories = value;
        },
    },
    actions: {
         async getProductCategories({ commit, state }, payload) {
             await axios
                .get("/api/product-categories")
                .then(({ data }) => {
                    commit("SET_CATEGORIES", data.data);

                })
                .catch(({ response: { error } }) => {
                    console.error("❌ Error receiving categories:", error);

                });
        },
    },
};
