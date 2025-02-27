import axios from "axios";
import {showSuccess, showError} from "../utils/swal";

export default {
    namespaced: true,
    state: {
        orders: [],
        errors: []
    },
    getters: {
        hasNotErrors(state) {
            return !state.errors || Object.keys(state.errors).length === 0;
        },
    },
    mutations: {
        RESET(state) {
            state.orders = [];
            state.errors = [];
        },
        SET_ORDERS(state, value) {
            state.orders = value;
        },
        SET_ERROR(state, value) {
            state.errors = value;
        },
    },
    actions: {
        async getOrders({commit, state}, payload) {
            await axios
                .get("/api/order")
                .then(({data}) => {
                    commit("SET_ORDERS", data.data);
                })
                .catch(({response: {error}}) => {
                    showError('❌ Error receiving orders:', error)
                });
        },
        async showOrder({commit, state}, payload) {
            return await axios
                .get("/api/order/" + payload)
                .then(({data}) => {
                    return data.data;
                })
                .catch(({response: {error}}) => {
                    showError('❌ Error receiving orders:', error)
                });
        },
        async storeOrder({commit, state}, payload) {

            commit("SET_ERROR", []);

            await axios
                .post("/api/order", payload)
                .then(({data}) => {
                    showSuccess()
                })
                .catch((error) => {
                    if (error?.response?.data?.errors) {
                        commit("SET_ERROR", error.response.data.errors);
                    }
                    showError("❌ Error in order storage", error)
                });

        },
        async updateOrder({commit, state}, {id, data}) {

            await axios
                .patch(`/api/order/${id}`, data)
                .then(({data}) => {
                    showSuccess()
                })
                .catch((error) => {
                    showError("❌ Error in updating the order", error)
                });

        },
        async deleteOrder({commit, state}, payload) {

            await axios
                .delete("/api/order/" + payload)
                .then(({data}) => {
                    showSuccess()
                })
                .catch((error) => {
                    showError("❌Error in clearing the order",error)
                });

        },
    },
};
