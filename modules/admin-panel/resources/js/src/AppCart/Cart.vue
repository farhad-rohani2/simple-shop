<template>
    <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
    >
        <div class="flex flex-wrap w-full mb-[-24px]">
            <div class="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
                <div
                    class="bb-cart-sidebar-block p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div class="bb-sb-title mb-[20px]">
                        <h3
                            class="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]"
                        >
                            Summary
                        </h3>
                    </div>
                    <div class="bb-sb-blok-contact">
                        <form action="cart.html#" method="post">
                            <div class="input-box mb-[30px]">
                                <label
                                    class="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]"
                                    >State/Province *</label
                                >
                                <div
                                    class="custom-select py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] bg-[#fff] leading-[26px]"
                                >
                                    <custom-select
                                        :options="states"
                                        v-model="form.stateId"
                                    ></custom-select>
                                </div>
                            </div>
                            <div class="input-box mb-[30px]">
                                <label
                                    class="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]"
                                    >City *</label
                                >
                                <div
                                    class="custom-select py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] bg-[#fff] leading-[26px]"
                                >
                                    <custom-select
                                        :options="cities"
                                        v-model="form.cityId"
                                    ></custom-select>
                                </div>
                            </div>
                            <div class="input-box mb-[30px]">
                                <label
                                    for="Zip-code"
                                    class="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]"
                                    >Zip/Postal Code *</label
                                >
                                <input
                                    v-model="form.zip"
                                    type="text"
                                    placeholder="Zip/Postal Code"
                                    class="w-full py-[10px] px-[15px] leading-[26px] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px] text-[14px] font-normal text-[#686e7d] bg-[#fff]"
                                    id="Zip-code"
                                />
                            </div>
                        </form>
                        <div class="bb-cart-summary">
                            <div class="inner-summary">
                                <ul>
                                    <li
                                        class="mb-[12px] flex justify-between leading-[28px]"
                                    >
                                        <span
                                            class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium"
                                            >Sub-Total</span
                                        >
                                        <span
                                            class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold"
                                            v-text="
                                                    '$' +
                                                    cart.priceAllCartItemsWithoutCalculate
                                                "
                                        ></span
                                        >
                                    </li>
                                    <li
                                        class="mb-[12px] flex justify-between leading-[28px]"
                                    >
                                        <span
                                            class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium"
                                            >Discount</span
                                        >
                                        <span
                                            class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold"
                                            v-text="
                                                    '$' +
                                                    Math.abs(cart.priceChangeAllCartItemsWithoutCartCalculate)
                                                "
                                        ></span
                                        >
                                    </li>
                                    <li
                                        class="mb-[12px] flex justify-between leading-[28px]"
                                    >
                                        <span
                                            class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium"
                                            >Delivery Charges</span
                                        >
                                        <span
                                            class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold"
                                            v-text="
                                                    '$' +
                                                    cart.pricePost
                                                "
                                        ></span
                                        >
                                    </li>
                                    <li
                                        class="mb-[12px] flex justify-between leading-[28px]"
                                    >
                                        <span
                                            class="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium"
                                            >Coupon Discount</span
                                        >
                                        <span
                                            class="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold"
                                        >
                                            <a
                                                class="bb-coupon drop-coupon font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#ff0000] cursor-pointer"
                                                >Apply Coupon</a
                                            >
                                        </span>
                                    </li>
                                    <li
                                        class="mb-[12px] flex justify-between leading-[28px]"
                                    >
                                        <div class="coupon-down-box w-full">
                                            <form
                                                method="post"
                                                class="relative mb-[15px]"
                                            >
                                                <input
                                                    class="bb-coupon w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]"
                                                    type="text"
                                                    placeholder="Enter Your coupon Code"
                                                    name="bb-coupon"
                                                    required
                                                />
                                                <button
                                                    class="bb-btn-2 transition-all duration-[0.3s] ease-in-out my-[8px] mr-[8px] flex justify-center items-center absolute right-[0] top-[0] bottom-[0] font-Poppins leading-[28px] tracking-[0.03rem] py-[2px] px-[12px] text-[13px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                                                    type="submit"
                                                >
                                                    Apply
                                                </button>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="summary-total border-t-[1px] border-solid border-[#eee] pt-[15px]"
                            >
                                <ul class="mb-[0]">
                                    <li class="mb-[6px] flex justify-between">
                                        <span
                                            class="text-left font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]"
                                            >Total Amount</span
                                        >
                                        <span
                                            class="text-right font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]"
                                            v-text="
                                                    '$' +
                                                    (cart.price+cart.priceChange)
                                                "
                                            ></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
                <div
                    class="bb-cart-table border-[1px] border-solid border-[#eee] rounded-[20px] overflow-hidden max-[1399px]:overflow-y-auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <table class="w-full max-[1399px]:w-[780px]">
                        <thead>
                            <tr
                                class="border-b-[1px] border-solid border-[#eee]"
                            >
                                <th
                                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"
                                >
                                    Product
                                </th>
                                <th
                                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"
                                >
                                    Price
                                </th>
                                <th
                                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"
                                >
                                    quality
                                </th>
                                <th
                                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"
                                >
                                    Total
                                </th>
                                <th
                                    class="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="product in products"
                                class="border-b-[1px] border-solid border-[#eee]"
                            >
                                <td class="p-[12px]">
                                    <a :href="product.url">
                                        <div
                                            class="Product-cart flex items-center"
                                        >
                                            <img
                                                :src="
                                                    product.cartable.media
                                                        .SpecialImage.src
                                                "
                                                alt="new-product-1"
                                                class="w-[70px] border-[1px] border-solid border-[#eee] rounded-[10px]"
                                            />
                                            <span
                                                v-text="product.cartable.title"
                                                class="ml-[10px] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d]"
                                            ></span>
                                        </div>
                                    </a>
                                </td>
                                <td class="p-[12px]">
                                    <span
                                        class="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]"
                                        v-text="
                                            product.cartable.price +
                                            product.priceChange
                                        "
                                    ></span>
                                </td>
                                <td class="p-[12px]">
                                    <div
                                        class="qty-plus-minus w-[85px] h-[45px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]"
                                    >
                                        <div
                                            class="dec bb-qtybtn"
                                            @click="
                                                removeUntilOne(
                                                    product.cartable.id,
                                                )
                                            "
                                        >
                                            -
                                        </div>
                                        <input
                                            disabled
                                            class="qty-input text-[#777] float-left text-[14px] h-[auto] m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                                            type="text"
                                            name="bb-qtybtn"
                                            :value="
                                                dd(product.quantity)
                                            "
                                        />
                                        <div
                                            class="inc bb-qtybtn"
                                            @click="add(product.cartable.id)"
                                        >
                                            +
                                        </div>
                                    </div>
                                </td>
                                <td class="p-[12px]">
                                    <span
                                        class="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]"
                                        v-text="
                                            (product.cartable.price +
                                                product.priceChange) *
                                            product.quantity
                                        "
                                    ></span>
                                </td>
                                <td class="p-[12px]">
                                    <div class="pro-remove">
                                        <a
                                            @click="
                                                removeForce(product.cartable.id)
                                            "
                                        >
                                            <i
                                                class="ri-delete-bin-line transition-all duration-[0.3s] ease-in-out text-[20px] text-[#686e7d] hover:text-[#ff0000]"
                                            ></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a
                    href="checkout.html"
                    class="bb-btn-2 mt-[24px] inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    >Check Out</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CustomSelect from "../AppRegister/CustomSelect.vue";

export default {
    name: "Cart",
    components: { CustomSelect },
    data() {
        return {
            form: {
                cityId: "",
                stateId: "",
                zip: "",
            },
        };
    },
    computed: {
        ...mapGetters("auth", ["user", "authenticated"]),
        ...mapState("auth", ["allowToSendOtp"]),
        ...mapGetters("address", ["states", "cities", "districts"]),
        ...mapState("address", [
            "statesLoading",
            "citiesLoading",
            "districtsLoading",
        ]),
        ...mapGetters("cart", ["cartSidebarIsOpen", "cart", "products"]),
        ...mapState("loader", ["loading"]),
    },
    methods: {
        ...mapActions("auth", ["login", "logout", "sendOtp", "register"]),
        ...mapActions("cart", {
            showcart: "show",
        }),
        ...mapActions("cart", ["add", "removeForce", "removeUntilOne"]),
        ...mapActions("address", ["getStates", "getCities", "getDistricts"]),
        dd(quantity) {
            return quantity;
        },
    },
    watch: {
        "form.stateId"(newSelectedState, oldSelectedState) {
            if (newSelectedState !== null) {
                this.selectedCity = null;
                this.selectedDistrict = null;
                this.getCities({ state_id: newSelectedState });
            }
        },
        "form.cityId"(newSelectedCity, oldSelectedCity) {
            if (newSelectedCity !== null) {
                this.selectedDistrict = null;
                this.getDistricts({ city_id: newSelectedCity });
            }
        },
        show(newShow, oldShow) {
            if (newShow && this.states.length === 0) {
                this.getStates();
            }
        },
    },
    mounted() {
        this.getStates();
        AOS.init({
            once: true,
        });

        $(".coupon-down-box").hide();
        $(".drop-coupon").on("click", function () {
            $(".coupon-down-box").slideToggle();
        });
    },
};
</script>

<style scoped></style>
