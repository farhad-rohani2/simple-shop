<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">📦 Order List</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="order in orders" :key="order.id" class="bg-white shadow-md rounded-lg p-4">
                <img :src="order.image" :alt="order.title" class="h-40 w-full object-contain mb-2"/>
                <h2 class="text-lg font-semibold">{{ order.status }}</h2>
                <h3 class="text-lg font-semibold text-wrap truncate">{{ order?.user?.name }}</h3>
                <p class="text-gray-500 text-sm">{{ order.total }} $</p>

                <div class="mt-4 flex justify-between">
                    <button @click="editOrder(order.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Edit
                    </button>
                    <button @click="doDeleteOrder(order.id)" class="bg-red-500 text-white px-4 py-2 rounded">Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "OrderList",
    computed: {
        ...mapState("order", ["orders"]),
    },
    methods: {
        ...mapActions("order", ["getOrders", "deleteOrder"]),

        editOrder(id) {
            this.$router.push({name: "edit-order", params: {id}});
        },
        doDeleteOrder(id) {
            this.deleteOrder(id);
            this.getOrders();
        },
    },
    mounted() {
        this.getOrders();
    },
};
</script>

<style scoped>
</style>
