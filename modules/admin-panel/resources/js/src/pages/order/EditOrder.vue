<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">✏️ Order editing</h1>

        <form @submit.prevent="submitForm">


            <div class="mb-4">
                <label for="user_id" class="block text-gray-700">user</label>
                <select v-model="form.user_id" id="user_id" class="w-full p-2 border border-gray-300 rounded"
                        :class="{'border-red-500': errors.user_id}" required>
                    <option value="">Choose</option>
                    <option v-for="user in users" :key="user.id" :value="user.id">
                        {{ user.name }}
                    </option>
                </select>
                <div v-if="errors.user_id" class="text-red-500 text-sm">{{ errors.user_id[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="product_id" class="block text-gray-700">product</label>
                <select v-model="form.product_id" id="product_id" class="w-full p-2 border border-gray-300 rounded"
                        :class="{'border-red-500': errors.product_id}" required>
                    <option value="">Choose</option>
                    <option v-for="product in products" :key="product.id" :value="product.id">
                        {{ product.name }}
                    </option>
                </select>
                <div v-if="errors.product_id" class="text-red-500 text-sm">{{ errors.product_id[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="count" class="block text-gray-700">count</label>
                <input v-model="form.count" type="number" id="count" class="w-full p-2 border border-gray-300 rounded"
                       :class="{'border-red-500': errors.count}" required/>
                <div v-if="errors.count" class="text-red-500 text-sm">{{ errors.count[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="total_price" class="block text-gray-700">Total Price</label>
                <input :value="total" type="text" id="total_price" class="w-full p-2 border border-gray-300 rounded bg-gray-100" readonly />
            </div>

            <div class="mb-4">
                <label for="status" class="block text-gray-700">status</label>
                <select v-model="form.status" id="status" class="w-full p-2 border border-gray-300 rounded"
                        :class="{'border-red-500': errors.status}" required>
                    <option value="new">new</option>
                    <option value="done">done</option>
                </select>
                <div v-if="errors.status" class="text-red-500 text-sm">{{ errors.status[0] }}</div>
            </div>


            <div class="mb-4">
                <label for="description" class="block text-gray-700">description</label>
                <textarea v-model="form.description" type="text" id="description" class="w-full p-2 border border-gray-300 rounded"
                          :class="{'border-red-500': errors.description}" ></textarea>
                <div v-if="errors.description" class="text-red-500 text-sm">{{ errors.description[0] }}</div>
            </div>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
                Save changes
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    name: "EditOrder",
    data() {
        return {
            form: {
                user_id: "",
                product_id: "",
                description: "",
                status: "new",
                count: "",
            },
        };
    },
    computed: {
        ...mapState("user", ["users"]),
        ...mapState("product", ["products"]),
        ...mapState("order", ["errors"]),
        ...mapGetters("order", ["hasNotErrors"]),
        total() {
            const selectedProduct = this.products.find(p => p.id === this.form.product_id);
            if (selectedProduct && this.form.count) {
                return selectedProduct.price * this.form.count;
            }
            return 0; // Default value
        },
    },
    async mounted() {
        this.getProductCategories();
        this.getUsers();
        await this.loadOrder();
    },
    methods: {
        ...mapActions("user", ["getUsers"]),
        ...mapActions("productCategory", ["getProductCategories"]),
        ...mapActions("order", ["updateOrder", "showOrder"]),

        async loadOrder() {
            const orderId = this.$route.params.id;
            if (!orderId) {
                console.error("The order ID is not specified!");
                return;
            }

            const order = await this.showOrder(orderId);
            this.form = {...order};
        },

        submitForm() {
            this.updateOrder({id: this.form.id, data: this.form});

            if (this.hasNotErrors) {
                this.$router.push({name: "order-list"});
            }

        },
    },
};
</script>
