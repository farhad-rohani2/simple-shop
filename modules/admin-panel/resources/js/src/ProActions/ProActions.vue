<template>
    <li
        :class="[
            existInWishlist ? 'active' : '',
            'bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]',
        ]"
    >
        <a
            href="javascript:void(0)"
            title="Wishlist"
            class="w-[35px] h-[35px] flex items-center justify-center"
            @click="
                existInWishlist
                    ? removeForceFromWishlist(blade.adId)
                    : addToWishlist(blade.adId)
            "
        >
            <i
                class="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></i>
        </a>
    </li>
    <li
        :class="[
            quickViewVisible ? 'active' : '',
            'bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]',
        ]"
    >
        <a
            href="javascript:void(0)"
            title="Quick View"
            class="w-[35px] h-[35px] flex items-center justify-center"
            @click="doQuickView"
        >
            <i
                class="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></i>
        </a>
    </li>
    <li
        class="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]"
    >
        <a
            href="compare.html"
            title="Compare"
            class="w-[35px] h-[35px] flex items-center justify-center"
        >
            <i
                class="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></i>
        </a>
    </li>
    <li
        :class="[
            existInCart ? 'active' : '',
            'bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]',
        ]"
    >
        <a
            href="javascript:void(0)"
            title="Add To Cart"
            class="w-[35px] h-[35px] flex items-center justify-center"
            @click="
                existInCart
                    ? removeForceFromCart(blade.adId)
                    : addToCart(blade.adId)
            "
        >
            <i
                class="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></i>
        </a>
    </li>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "ProActions",
    data() {
        return {
            existProduct: false,
        };
    },
    computed: {
        ...mapGetters("wishlist", {
            wishlistProductIds: "productIds",
        }),
        ...mapGetters("cart", {
            cartProductIds: "productIds",
        }),
        ...mapState("quickView", {
            quickViewVisible: "visible",
        }),
        existInWishlist() {
            let a = false;
            this.wishlistProductIds.forEach((item) => {
                if (this.blade.adId == item) {
                    a = true;
                }
            });
            return a;
        },
        existInCart() {
            let a = false;
            this.cartProductIds.forEach((item) => {
                if (this.blade.adId == item) {
                    a = true;
                }
            });
            return a;
        },
    },
    methods: {
        ...mapActions("wishlist", {
            addToWishlist: "add",
            removeForceFromWishlist: "removeForce",
            // wishlist: "show",
        }),
        ...mapActions("cart", {
            addToCart: "add",
            removeForceFromCart: "removeForce",
            // wishlist: "show",
        }),
        ...mapActions("quickView", ["setVisible", "setProductId"]),
        doQuickView() {
            this.setVisible(!this.quickViewVisible);
            this.setProductId(this.blade.adId);
        },
    },
    mounted() {
        this.setVisible(false);
    },
    unmounted() {
        this.setVisible(false);
    },
};
</script>

<style scoped></style>
