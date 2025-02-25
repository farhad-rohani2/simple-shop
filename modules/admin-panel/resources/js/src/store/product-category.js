import axios from "axios";
import Swal from 'sweetalert2'
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
                    console.error("❌ خطا در دریافت دسته‌بندی‌ها:", error);

                });
        },
        async storeProductCategory({ commit, state }, payload) {
            await axios
                .post("/api/product-categories",payload)
                .then(({ data }) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "stored",
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
                .catch(({ response: { error } }) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "❌ خطا در خیره سازی محصول",
                        text:error,
                        showConfirmButton: false,
                        timer: 1500
                    });

                });

        },
    },
};
