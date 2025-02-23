import axios from "axios";

export default {
    namespaced: true,
    state: {
        categories: [],
    },
    getters: {
        find: (state) => (id) => {
            return state.categories.find(category => category.id === id)
        }
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
         async getCategories({ commit, state }, payload) {
            await axios
                .get("/api/blueberry/category/?categoryDeep="+payload)
                .then(({ data }) => {
                    commit("SET_CATEGORIES", data);
                })
                .catch(({ response: { data } }) => {});

        },
    },
};
