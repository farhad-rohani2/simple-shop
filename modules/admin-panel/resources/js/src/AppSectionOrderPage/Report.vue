<template>
    <div
        class="basis-full md:basis-2/5 font-zzz1 flex flex-col self-start sticky top-3 shrink grow-0 min-w-72"
    >
        <h2 class="text-lg p-2 font-zzz2">صورت حساب</h2>

        <div
            class="font-zzz1 flex flex-col rounded-md border self-start gap-2 p-2 shadow-2xl w-full"
        >
            <div class="flex justify-between">
                <span>قیمت محصولات</span>
                <span
                    v-text="cart.priceAllCartItemsWithoutCalculate + ' تومان'"
                ></span>
            </div>
            <div class="flex justify-between">
                <span>تخفیف محصولات</span>
                <span
                    v-text="
                        cart.priceChangeAllCartItemsWithoutCartCalculate +
                        ' تومان'
                    "
                ></span>
            </div>
            <div class="flex justify-between">
                <span>هزینه حمل و نقل</span>
                <span v-text="cart.pricePost + ' تومان'"></span>
            </div>
            <div class="flex justify-between">
                <span>جمع کل</span>
                <span
                    v-text="
                        cart.priceAllCartItemsWithoutCalculate +
                        cart.priceChangeAllCartItemsWithoutCartCalculate +
                        cart.pricePost +
                        ' تومان'
                    "
                ></span>
            </div>
            <div class="flex justify-between">
                <span
                    @click="pay"
                    class="w-full text-center p-2 rounded-md border-2 text-xl cursor-pointer"
                    >پرداخت</span
                >
            </div>
        </div>

        <report-payment />
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ReportPayment from "./ReportPayment.vue";

export default {
    name: "report",
    components: { ReportPayment },
    computed: {
        ...mapGetters("cart", ["cart"]),
    },
    methods: {
        ...mapActions("cart", ["pay"]),
    },
};
</script>
