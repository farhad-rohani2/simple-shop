<template>
    <div>
        <h2 class="text-lg p-2 font-zzz2">سبد خرید شما</h2>
        <!--     cartItems    -->
        <div class="flex flex-col flex-nowrap gap-2">
            <div
                v-for="cartItem in products"
                class="flex flex-row flex-nowrap gap-2 p-2 border rounded-md"
            >
                <div class="basis-3/4 flex flex-col px-8 justify-around">
                    <a :href="cartItem.url">
                       <span
                           v-text="cartItem.cartable.title"
                           class="flex-basis font-zzz1"
                       ></span>
                    </a>

                    <div class="flex justify-between w-full">
                        <div
                            class="flex items-center justify-center font-zzz1"
                            v-if="cartItem.priceChange"
                        >
                            <span
                                class="line-through decoration-custom-red-100 self-end font-zzz1 text-xs mx-2"
                                v-text="cartItem.cartable.price + ' تومان'"
                            ></span>
                            <span
                                class="font-zzz2 mx-2"
                                v-text="
                                    cartItem.cartable.price +
                                    cartItem.priceChange +
                                    ' تومان'
                                "
                            ></span>
                        </div>
                        <div
                            class="flex items-center justify-center font-zzz1"
                            v-else
                        >
                            <span
                                class="font-zzz2 mx-2"
                                v-text="
                                    cartItem.cartable.price +
                                    cartItem.priceChange +
                                    ' تومان'
                                "
                            ></span>
                        </div>
                        <div
                            class="flex rounded-full bg-white justify-between items-center max-w-24"
                            v-if="cartItem.quantity !== 0"
                        >
                            <div
                                class="flex bg-custom-red-300 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                                @click="add({ productId: cartItem.cartable.id })"
                            >
                                <img
                                    alt="plus icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="../../assets/icons/plus-grey-500.svg"
                                    class="white-filter"
                                />
                            </div>
                            <div
                                class="flex justify-center size-2 items-center font-zzz1 rounded-full"
                                v-text="cartItem.quantity"
                            ></div>
                            <div
                                class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                                v-if="cartItem.quantity > 1"
                                @click="remove({ productId: cartItem.cartable.id })"
                            >
                                <img
                                    alt="plus icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="../../assets/icons/negative-grey-500.svg"
                                    class="white-filter"
                                />
                            </div>
                            <div
                                class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                                v-else
                                @click="remove({ productId: cartItem.cartable.id })"
                            >
                                <img
                                    alt="plus icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="../../assets/icons/trash-grey-500.svg"
                                    class="white-filter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <a class="basis-1/4 flex justify-center items-center" :href="cartItem.url">
                    <img
                        :src="cartItem?.cartable?.media?.SpecialImage?.src"
                        class="size-28 rounded-md"
                    />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "cartItems",
    computed: {
        ...mapGetters("cart", ["products", "cart"]),
    },
    methods: {
        ...mapActions("cart", {
            showcart: "show",
            add: "add",
            remove: "remove",
        }),
    },
    mounted() {
        this.showcart();
    },
};
</script>
