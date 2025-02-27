<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">✏️ Product editing</h1>

        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Product name</label>
                <input v-model="form.name" type="text" id="name" class="w-full p-2 border border-gray-300 rounded"
                       :class="{'border-red-500': errors.name}"/>
                <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700">Description</label>
                <input v-model="form.description" type="text" id="description"
                       class="w-full p-2 border border-gray-300 rounded"
                       :class="{'border-red-500': errors.description}"/>
                <div v-if="errors.description" class="text-red-500 text-sm">{{ errors.description[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="product_category_id" class="block text-gray-700">category</label>
                <select v-model="form.product_category_id" id="product_category_id"
                        class="w-full p-2 border border-gray-300 rounded"
                        :class="{'border-red-500': errors.product_category_id}" required>
                    <option value="">Choose</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
                <div v-if="errors.product_category_id" class="text-red-500 text-sm">{{
                        errors.product_category_id[0]
                    }}
                </div>
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700">Price (to ruble, with a copy)</label>
                <input
                    v-model="form.price"
                    type="text"
                    id="price"
                    class="w-full p-2 border border-gray-300 rounded"
                    :class="{'border-red-500': errors.price}"
                    required
                    @input="formatPrice"
                />
                <div v-if="formattedPrice" class="text-gray-600 text-sm">
                    {{ formattedPrice }}
                </div>
                <div v-if="errors.price" class="text-red-500 text-sm">{{ errors.price[0] }}</div>
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
    name: "EditProduct",
    data() {
        return {
            form: {
                id: null,
                name: "",
                description: "",
                price: "",
                product_category_id: "",
            },
            formattedPrice: "",
        };
    },
    computed: {
        ...mapState("productCategory", ["categories"]),
        ...mapState("product", ["errors"]),
        ...mapGetters("product", ["hasErrors"]),
    },
    async mounted() {
        await this.getProductCategories();
        await this.loadProduct();
    },
    methods: {
        ...mapActions("productCategory", ["getProductCategories"]),
        ...mapActions("product", ["updateProduct", "showProduct"]),

        async loadProduct() {
            const productId = this.$route.params.id;
            if (!productId) {
                console.error("The product ID is not specified!");
                return;
            }

            const product = await this.showProduct(productId);
            this.form = {...product};
        },

        formatPrice() {
            this.form.price = this.form.price.replace(/[^0-9.]/g, "");

            const parts = this.form.price.split(".");
            if (parts.length > 2) {
                this.form.price = parts[0] + "." + parts.slice(1).join("");
            }

            const price = parseFloat(this.form.price);
            if (!isNaN(price)) {
                const rubles = Math.floor(price);
                const kopeks = Math.round((price - rubles) * 100);
                this.formattedPrice = `${rubles} Ruble and ${kopeks.toString().padStart(2, '0')} Copopic`;
            } else {
                this.formattedPrice = "";
            }
        },

        submitForm() {
            this.updateProduct({id: this.form.id, data: this.form});

            if (this.hasErrors) {
                this.$router.push({name: "product-list"});
            }

        },
    },
};
</script>
