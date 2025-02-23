<template>
    <div class="flex flex-column flex-nowrap justify-center pt-2 md:pt-0  px-5 sm:px-10 md:px-0 gap-2 ">
        <div
            class="flex rounded-full bg-white justify-between items-center max-w-24"
            v-if="product.quantity !== 0"
        >
            <div
                class="flex bg-custom-red-300 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                @click="add"
            >
                <img
                    alt="plus icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    src="../assets/icons/plus-grey-500.svg"
                    class="white-filter"
                />
            </div>
            <div
                class="flex justify-center size-2 items-center font-zzz3 rounded-full"
                v-text="product.quantity"
            ></div>
            <div
                class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                v-if="product.quantity > 1"
                @click="remove"
            >
                <img
                    alt="plus icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    src="../assets/icons/negative-grey-500.svg"
                    class="white-filter"
                />
            </div>
            <div
                class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                v-else
                @click="remove"
            >
                <img
                    alt="plus icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    src="../assets/icons/trash-grey-500.svg"
                    class="white-filter"
                />
            </div>
        </div>
        <div
            v-if="product.quantity === 0"
            @click="add"
            class="w-full bg-custom-green-100 border rounded-full flex justify-center align-content-center items-center p-2 text-white text-center font-zzz3 select-none cursor-pointer"
        >
            افزودن به سبد خرید
        </div>
        <a
            v-else
            :href="cart.url"
            class="w-full bg-custom-green-100 border rounded-full flex justify-center align-content-center items-center p-2 text-white text-center font-zzz3 select-none cursor-pointer"
        >
            سبد خرید
        </a>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "AppAddProductToCart",
    data() {
        return {};
    },
    methods: {
        ...mapActions("cart", ["add", "remove", "setCurrentProductId"]),
    },
    computed: {
        ...mapGetters("cart", ["product","cart"]),
    },

    mounted() {
        this.setCurrentProductId({productId:this.blade.productId});
    },
};
</script>
