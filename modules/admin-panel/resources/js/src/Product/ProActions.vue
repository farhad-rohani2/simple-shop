<template>
    <div class="bb-single-qty flex flex-wrap m-[-2px]">
        <div
            class="qty-plus-minus m-[2px] w-[85px] h-[40px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]"
        >
            <div
                class="dec bb-qtybtn"
                @click="
                    dd(productInCart)?.quantity == 1
                        ? removeForce(bladeProductId)
                        : removeUntilOne(bladeProductId)
                "
            >
                -
            </div>
            <input
                class="qty-input text-[#777] float-left text-[14px] h-auto m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                type="text"
                name="bb-qtybtn"
                :value="dd(productInCart)?.quantity ?? 0"
            />
            <div class="inc bb-qtybtn" @click="add(bladeProductId)">+</div>
        </div>
        <div class="buttons m-[2px]">
            <a
                href="javascript:void(0)"
                class="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] flex font-Poppins leading-[28px] tracking-[0.03rem] py-[6px] px-[25px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                >View Cart</a
            >
        </div>

        <ul class="bb-pro-actions my-[2px] flex">

            <li
                :class="[
                existInWishlist ? 'active' : '',
                'bb-btn-group ',
                ]"
            >
                <a
                    @click="
                    existInWishlist
                    ? removeForceFromWishlist(blade.adId)
                    : addToWishlist(blade.adId)"
                    href="javascript:void(0)" title="Wishlist"
                    class="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">
                    <i class="ri-heart-line text-[16px] leading-[10px] text-[#777]"></i>
                </a>
            </li>

<!--            <li-->
<!--                :class="[-->
<!--                 quickViewVisible ? 'active' : '',-->
<!--                'bb-btn-group',-->
<!--                ]"-->
<!--            >-->
<!--                <a     @click="doQuickView"  href="javascript:void(0)" title="Quick View"-->
<!--                    class="bb-modal-toggle transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">-->
<!--                    <i class="ri-eye-line text-[16px] leading-[10px] text-[#777]"></i>-->
<!--                </a>-->
<!--            </li>-->

        </ul>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "ProActions",
    data() {
        return {
            bladeProductId: null,
            existProduct: false,
            productInCart: null,
        };
    },
    computed: {
        ...mapGetters("wishlist", {
            wishlistProductIds: "productIds",
        }),
        ...mapGetters("cart", {
            cartProductIds: "productIds",
        }),
        ...mapGetters("cart", ["products"]),

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

    },
    methods: {
        ...mapActions("wishlist", {
            addToWishlist: "add",
            removeForceFromWishlist: "removeForce",
        }),
        ...mapActions("cart", {
            addToCart: "add",
            removeForceFromCart: "removeForce",
        }),
        ...mapActions("quickView", ["setVisible", "setProductId"]),
        doQuickView() {
            this.setVisible(!this.quickViewVisible);
            this.setProductId(this.blade.adId);
        },
        ...mapActions("quickView", ["setVisible", "setProduct"]),
        ...mapActions("cart", [
            "setCartSidebarIsOpen",
            "add",
            "removeForce",
            "removeUntilOne",
        ]),
        dd(quantity) {
            return quantity;
        },
        findProductInCart(productId) {
            let productInCart = null;

            console.log(this.products);

            this.products.forEach((item) => {
                if (item.cartable?.id == productId) {
                    console.log(productId);
                    console.log(item);
                    productInCart = item;
                }
            });

            console.log(productInCart);

            return productInCart;
        },
    },
    watch: {
        visible(newValue) {
            if (newValue) {
                $(".bb-modal-overlay").fadeIn();
                $(".bb-modal").fadeIn();
                $("body").addClass("bb-overflow-hidden");
                $(".bb-modal-dialog").addClass("bb-fadeOutUp");
                $(".bb-modal-dialog").removeClass("bb-fadeInDown");
            } else {
                $(".bb-modal-overlay").fadeOut();
                $(".bb-modal").fadeOut();
                $("body").removeClass("bb-overflow-hidden");
                $(".bb-modal-dialog").removeClass("bb-fadeOutUp");
                $(".bb-modal-dialog").addClass("bb-fadeInDown");
            }
        },
        // productId(newValue) {
        //     this.setProduct({
        //         adId: newValue,
        //         uuid: this.blade.uuid,
        //     });
        // },
        // product() {
        //     this.productInCart = this.findProductInCart(this.product?.id);
        // },
        products() {
            this.productInCart = this.findProductInCart(this.bladeProductId);
        },
    },
    mounted() {
        this.setVisible(false);
        this.bladeProductId = this.blade.adId;
        this.productInCart = this.findProductInCart(this.blade.adId)
    },
    unmounted() {
        this.setVisible(false);
    },
};
</script>

<style scoped></style>
