<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">📦 Product List</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-lg p-4">
                <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain mb-2"/>
                <h2 class="text-lg font-semibold">{{ product.title }}</h2>
                <p class="text-gray-500 text-sm">{{ product.price }} $</p>

                <div class="mt-4 flex justify-between">
                    <button @click="editProduct(product.id)" class="bg-blue-500 text-white px-4 py-2 rounded">Edit
                    </button>
                    <button @click="doDeleteProduct(product.id)" class="bg-red-500 text-white px-4 py-2 rounded">Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    name: "ProductList",
    computed: {
        ...mapState("product", ["products"]),
    },
    methods: {
        ...mapActions("product", ["getProducts", "deleteProduct"]),

        editProduct(id) {
            this.$router.push({name: "edit-product", params: {id}});
        },
        doDeleteProduct(id) {
            this.deleteProduct(id);
            this.getProducts();
        },
    },
    mounted() {
        this.getProducts();
    },
};
</script>

<style scoped>
</style>
