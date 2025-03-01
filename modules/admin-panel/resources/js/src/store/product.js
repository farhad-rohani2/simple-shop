import axios from "axios";
import {showSuccess, showError} from "../utils/swal";

export default {
    namespaced: true,
    state: {
        products: [],
        errors: []
    },
    getters: {
        hasErrors(state) {
            return !state.errors || Object.keys(state.errors).length === 0;
        },
    },
    mutations: {
        RESET(state) {
            state.products = [];
            state.errors = [];
        },
        SET_PRODUCTS(state, value) {
            state.products = value;
        },
        SET_ERROR(state, value) {
            state.errors = value;
        },
    },
    actions: {
        async getProducts({commit, state}, payload) {
            await axios
                .get("/api/product")
                .then(({data}) => {
                    commit("SET_PRODUCTS", data.data);
                })
                .catch(({response: {error}}) => {
                    showError('❌ Error receiving products:', error)
                });
        },
        async showProduct({commit, state}, payload) {
            return await axios
                .get("/api/product/" + payload)
                .then(({data}) => {
                    return data.data;
                })
                .catch(({response: {error}}) => {
                    showError('❌ Error receiving products:', error)
                });
        },
        async storeProduct({commit, state}, payload) {

            commit("SET_ERROR", []);

            await axios
                .post("/api/product", payload)
                .then(({data}) => {
                    showSuccess()
                })
                .catch((error) => {
                    if (error?.response?.data?.errors) {
                        commit("SET_ERROR", error.response.data.errors);
                    }
                    showError("❌ Error in product storage", error)
                });

        },
        async updateProduct({commit, state}, {id, data}) {

            await axios
                .patch(`/api/product/${id}`, data)
                .then(({data}) => {
                    showSuccess()
                })
                .catch((error) => {
                    showError("❌ Error in updating the product", error)
                });

        },
        async deleteProduct({commit, state}, payload) {

            await axios
                .delete("/api/product/" + payload)
                .then(({data}) => {
                   showSuccess()
                })
                .catch((error) => {
                    showError("❌Error in clearing the product",error)
                });

        },
    },
};
