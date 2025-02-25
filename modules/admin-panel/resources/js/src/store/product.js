import axios from "axios";
import Swal from 'sweetalert2'

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
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "❌ Error receiving products:",
                        text: error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });
        },
        async showProduct({commit, state}, payload) {
          return   await axios
                .get("/api/product/"+payload)
                .then(({data}) => {
                    return data.data;
                })
                .catch(({response: {error}}) => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "❌ Error receiving product:",
                        text: error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });
        },
        async storeProduct({commit, state}, payload) {

            commit("SET_ERROR", []);

            await axios
                .post("/api/product", payload)
                .then(({data}) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "stored",
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
                .catch((error) => {

                    if (error?.response?.data?.errors) {
                        commit("SET_ERROR", error.response.data.errors);
                    }

                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "❌ Error in product storage",
                        text: error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });

        },
        async updateProduct({commit, state}, { id, data }) {

            await axios
                .patch(`/api/product/${id}`, data)
                .then(({data}) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
                .catch((error) => {

                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "❌ Error in clearing the product",
                        text: error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });

        },
        async deleteProduct({commit, state}, payload) {

            await axios
                .delete("/api/product/" + payload)
                .then(({data}) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
                .catch((error) => {

                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "❌Error in clearing the product",
                        text: error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });

        },
    },
};
