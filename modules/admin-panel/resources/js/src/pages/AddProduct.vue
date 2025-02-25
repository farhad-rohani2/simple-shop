<template>
    <div class="container mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">📦 اضافه کردن محصول جدید</h1>

        <form @submit.prevent="">
            <div class="mb-4">
                <label for="name" class="block text-gray-700">name</label>
                <input v-model="form.name" type="text" id="name" class="w-full p-2 border border-gray-300 rounded"
                       :class="{'border-red-500': errors.name}" />
                <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700">description</label>
                <input v-model="form.description" type="text" id="description" class="w-full p-2 border border-gray-300 rounded"
                       :class="{'border-red-500': errors.description}" />
                <div v-if="errors.description" class="text-red-500 text-sm">{{ errors.description[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="product_category_id" class="block text-gray-700">دسته‌بندی</label>
                <select v-model="form.product_category_id" id="product_category_id" class="w-full p-2 border border-gray-300 rounded"
                        :class="{'border-red-500': errors.product_category_id}" required>
                    <option value="">انتخاب کنید</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
                <div v-if="errors.product_category_id" class="text-red-500 text-sm">{{ errors.product_category_id[0] }}</div>
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700">قیمت (به روبل، با احتساب کوپک)</label>
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


<!--            <div class="mb-4">-->
<!--                <label for="image" class="block text-gray-700">لینک تصویر</label>-->
<!--                <input v-model="form.image" type="url" id="image" class="w-full p-2 border border-gray-300 rounded"-->
<!--                       :class="{'border-red-500': errors.image}" required/>-->
<!--                <div v-if="errors.image" class="text-red-500 text-sm">{{ errors.image[0] }}</div>-->
<!--            </div>-->

            <button @click="submitForm" type="button" class="bg-green-500 text-white px-4 py-2 rounded">اضافه کردن محصول</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {useRouter} from "vue-router";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    name: "AddProduct",
    data() {
        return {
            form: {
                name: "",
                description: "",
                price: "",
                image: "",
                product_category_id: "",
            },

        };
    },
    computed: {
        ...mapState("productCategory", ["categories"]),
        ...mapState("product", ["errors"]),
        ...mapGetters("product", ["hasErrors"]),
    },
    mounted() {
        this.getProductCategories();
    },
    methods: {
        ...mapActions("productCategory", ["getProductCategories","storeProductCategory"]),
        ...mapActions("product", ["storeProduct"]),

        formatPrice() {
            // فقط اعداد و یک نقطه معتبر باشند
            this.form.price = this.form.price.replace(/[^0-9.]/g, "");

            // اطمینان از داشتن فقط یک نقطه
            const parts = this.form.price.split(".");
            if (parts.length > 2) {
                this.form.price = parts[0] + "." + parts.slice(1).join("");
            }

            // نمایش روبل و کوپک
            const price = parseFloat(this.form.price);
            if (!isNaN(price)) {
                const rubles = Math.floor(price); // روبل (عدد صحیح)
                const kopeks = Math.round((price - rubles) * 100); // کوپک (دو رقم اعشار)
                this.formattedPrice = `${rubles} روبل و ${kopeks.toString().padStart(2, '0')} کوپک`;
            } else {
                this.formattedPrice = "";
            }
        },
        async submitForm() {
            await this.storeProduct(this.form).then(()=>{
                if (this.hasErrors) {
                    this.$router.push({ name: "product-list" });
                }
            });
        },
    },
};
</script>

<style scoped>
</style>
