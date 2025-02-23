import axios from "axios";

export default {
    namespaced: true,
    state: {
        states: [],
        cities: [],
        districts: [],
        statesLoading: false,
        citiesLoading: false,
        districtsLoading: false,
        addresses: [],
        selectedAddress: {},
    },
    getters: {
        states(state) {
            return state.states;
        },
        cities(state) {
            return state.cities;
        },
        districts(state) {
            return state.districts;
        },
        addresses(state) {
            return state.addresses;
        },
        selectedAddress(state) {
            return state.selectedAddress;
        },
    },
    mutations: {
        RESET (state) {
            state.states.length=0
            state.cities.length=0
            state.districts.length=0
            state.statesLoading=false
            state.citiesLoading=false
            state.districtsLoading=false
            state.addresses.length=0
            state.selectedAddress={}
        },
        SET_STATES(state, value) {
            state.states = value;
        },
        SET_CITIES(state, value) {
            state.cities = value;
        },
        SET_DISTRICTS(state, value) {
            state.districts = value;
        },
        SET_ADDRESSES(state, value) {
            state.addresses = value;
        },
        SET_SELECTED_ADDRESS(state, value) {
            state.selectedAddress = value;
        },
    },
    actions: {
        async getStates({ commit, state }, payload) {
            state.statesLoading = true;
            await axios
                .get("/api/blueberry/address/state")
                .then(({ data }) => {
                    commit("SET_STATES", data);
                    state.statesLoading = false;
                })
                .catch(({ response: { data } }) => {});
        },
        async getCities({ commit, state }, payload) {
            state.citiesLoading = true;

            await axios
                .post("/api/blueberry/address/city", payload)
                .then(({ data }) => {
                    commit("SET_CITIES", data);
                    state.citiesLoading = false;
                })
                .catch(({ response: { data } }) => {});
        },
        async getDistricts({ commit, state }, payload) {
            state.districtsLoading = true;
            await axios
                .post("/api/blueberry/address/district", payload)
                .then(({ data }) => {
                    commit("SET_DISTRICTS", data);
                    state.districtsLoading = false;
                })
                .catch(({ response: { data } }) => {});
        },
        async getAddresses({ commit, state }, payload) {
            await axios
                .get("/api/blueberry/address")
                .then(({ data }) => {
                    commit("SET_ADDRESSES", data);
                })
                .catch(({ response: { data } }) => {});
        },
        async select({ commit, state }, payload) {
            commit("cartPostType/SET_SELECTED_CART_POST_TYPE", {}, { root: true },);
            await axios
                .get("/api/blueberry/cart/postType/address/" + payload.id + "/select")
                .then(({ data }) => {
                    commit("SET_SELECTED_ADDRESS", payload);
                    commit("cart/SET_CART", data.cart, { root: true });
                })
                .catch(({ response: { data } }) => {
                    commit("SET_SELECTED_ADDRESS", {});
                });
        },
        async removeAddress({ commit, state }, payload) {
            commit("cartPostType/SET_SELECTED_CART_POST_TYPE", {}, { root: true },);
            await axios
                .delete("/api/blueberry/cart/postType/address/" + payload.addressId)
                .then(({ data }) => {
                    commit("SET_ADDRESSES", data.addresses);
                    commit("SET_SELECTED_ADDRESS", {});
                    commit("cart/SET_CART", data.cart, { root: true });
                })
                .catch(({ response: { data } }) => {});
        },
        async createAddress({ commit, state }, payload) {
            commit("cartPostType/SET_SELECTED_CART_POST_TYPE", {}, { root: true },);
            await axios
                .post("/api/blueberry/address", payload)
                .then(({ data }) => {
                    commit("SET_ADDRESSES", data);
                })
                .catch(({ response: { data } }) => {});
        },
    },
};
