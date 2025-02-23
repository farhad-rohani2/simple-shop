<template>
    <div
        class="z-10 size-96 border rounded-2 absolute left-0 top-6 animate-wiggle rounded-md bg-slate-50 p-1.5 overflow-y-scroll"
    >
        <div class="bg-white w-full mb-2 last:mb-0">
            <div class="flex justify-between gap-2">
                <a
                    :href="cart.url"
                    v-if="cart.products_count !== 0"
                    class="basis-4/5 w-full bg-custom-green-100 border rounded-full flex justify-around align-content-center items-center p-2 text-white font-zzz3 select-none cursor-pointer"
                >
                    <span>سبد خرید</span>
                    <div v-if="cart.priceChange">
                        <span
                            v-text="cart.price + 'تومان '"
                            class="line-through decoration-custom-red-100 text-xs ml-2"
                        ></span>

                        <span
                            v-text="cart.price + cart.priceChange + 'تومان '"
                        ></span>
                    </div>
                    <div v-else>
                        <span v-text="cart.price + 'تومان '"></span>
                    </div>
                </a>
                <div
                    v-else
                    class="w-full bg-custom-green-100 border rounded-full flex justify-center align-content-center items-center p-2 text-white font-zzz3 select-none cursor-pointer"
                >
                    سبد خرید خالی
                </div>
                <div
                    @click="doLogout"
                    class="basis-1/5 w-full bg-custom-blue-100/50 border rounded-full flex justify-around align-content-center items-center p-2 text-white font-zzz3 select-none cursor-pointer"
                >
                    خروج
                </div>
            </div>
        </div>
        <div
            v-for="product in this.products"
            class="flex flex-row flex-nowrap mb-2 last:mb-0 gap-2"
        >
            <a :href="product.url" class="contents">
                <img
                    :src="product?.cartable?.media?.SpecialImage?.src"
                    class="size-14 rounded-md"
                />
            </a>

            <div class="flex flex-nowrap justify-center w-full">
                <div
                    class="flex flex-nowrap flex-col justify-center items-center w-full"
                >
                    <a
                        class="w-full font-zzz1"
                        v-text="product.cartable.title"
                        :href="product.url"
                    ></a>
                    <div class="flex justify-between w-full select-none">
                        <div
                            class="flex items-center justify-center font-zzz1"
                            v-if="product.priceChange"
                        >
                            <span
                                class="line-through decoration-custom-red-100 self-end font-zzz1 text-xs mx-2"
                                v-text="product.cartable.price + ' تومان'"
                            ></span>
                            <span
                                class="font-zzz2 mx-2"
                                v-text="
                                    product.cartable.price +
                                    product.priceChange +
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
                                    product.cartable.price +
                                    product.priceChange +
                                    ' تومان'
                                "
                            ></span>
                        </div>

                        <div
                            class="flex rounded-full bg-white justify-between items-center max-w-24"
                            v-if="product.quantity !== 0"
                        >
                            <div
                                class="flex bg-custom-red-300 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                                @click="
                                    add({
                                        productId: product.cartable.id,
                                    })
                                "
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
                                v-text="product.quantity"
                            ></div>
                            <div
                                class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1"
                                v-if="product.quantity > 1"
                                @click="
                                    remove({
                                        productId: product.cartable.id,
                                    })
                                "
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
                                @click="
                                    remove({
                                        productId: product.cartable.id,
                                    })
                                "
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
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Cart",
    data() {
        return {
            timeout: {},
        };
    },
    computed: {
        ...mapGetters("auth", ["authenticated"]),
        ...mapGetters("cart", ["products", "cart"]),
    },
    methods: {
        show() {
            clearTimeout(this.timeout);
            this.isShow = true;
        },
        hidden() {
            this.timeout = setTimeout(() => {
                this.isShow = false;
            }, 300);
        },
        ...mapActions("cart", {
            showcart: "show",
            add: "add",
            remove: "remove",
            removeCart: "removeCart",
        }),
        ...mapActions("auth", ["logout"]),
        ...mapActions(["resetAll"]),
        doLogout() {
            this.logout().then(() => {
                this.resetAll();
            });
        },
    },
};
</script>

<style scoped></style>
