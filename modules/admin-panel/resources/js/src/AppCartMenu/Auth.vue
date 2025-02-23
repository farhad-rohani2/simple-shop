<template>
    <div
        class="z-10 border rounded-2 absolute left-0 top-6 animate-wiggle rounded-md bg-slate-50 p-2 gap-2 flex flex-wrap justify-between items-center"
    >
        <div
            class="focus-within:shadow focus-within:p-0.5 flex justify-between w-full rounded border"
        >
            <label class="px-2" for="mobile">احراز هویت با</label>

            <div class="flex gap-1">
                <input type="radio" value="email" v-model="authData.type" />
                <label for="mobile">ایمیل</label>
            </div>

            <div class="flex gap-1 pl-2">
                <input type="radio" value="mobile" v-model="authData.type" />
                <label for="mobile">موبایل</label>
            </div>
        </div>
        <div
            class="focus-within:shadow focus-within:p-0.5 flex justify-between w-full rounded border"
            v-if="authData.type === 'mobile'"
        >
            <label class="px-2" for="mobile">موبایل</label>
            <input
                class="rounded px-1 py-0.5 outline-none"
                type="text"
                name="mobile"
                placeholder="09123456789"
                v-model="authData.mobile"
            />
        </div>
        <div
            class="focus-within:shadow focus-within:p-0.5 flex justify-between w-full rounded border"
            v-if="authData.type === 'email'"
        >
            <label class="px-2" for="email">ایمیل</label>
            <input
                class="rounded px-1 py-0.5 outline-none"
                type="text"
                name="email"
                v-model="authData.email"
            />
        </div>
        <div
            class="group focus-within:shadow focus-within:p-0.5 flex justify-between w-full rounded border"
        >
            <label class="px-2 text-nowrap" for="password">رمز عبور</label>
            <input
                class="rounded px-1 py-0.5 outline-none"
                type="password"
                name="password"
                v-model="authData.password"
            />
        </div>
        <div
            v-if="showOtpField"
            class="group focus-within:shadow focus-within:p-0.5 flex justify-between w-full rounded border"
        >
            <label
                v-if="allowToSendOtp"
                class="px-2 text-nowrap shadow-md border bg-custom-green-100 text-white cursor-pointer rounded select-none"
                for="otp"
                @click="sendOtp(authData)"
                >ارسال کد</label
            >
            <label
                v-else
                class="px-2 text-nowrap shadow-md border bg-custom-green-50 text-custom-gray-400 cursor-not-allowed rounded select-none"
                for="otp"
                >کد را وارد کنید</label
            >
            <div class="flex flex-nowrap gap-2">
                <input
                    class="rounded px-1 py-0.5 outline-none text-center w-44"
                    type="text"
                    name="otp"
                    v-model="authData.otp"
                />
                <timer
                    class="flex justify-center items-center pl-2 font-zzz3 select-none"
                    v-if="!allowToSendOtp"
                ></timer>
            </div>
        </div>
        <div class="w-full text-center flex justify-center gap-2">
            <span
                v-if="!showOtpField"
                class="text-center rounded-md border px-1 py-0.5 cursor-pointer select-none bg-custom-blue-100/50 text-white"
                @click="doLogin"
                >ورود</span
            >
            <span
                v-if="showOtpField"
                class="text-center rounded-md border px-1 py-0.5 cursor-pointer select-none bg-custom-blue-100/50 text-white"
                @click="showOtpField = false"
                >ورود <-</span
            >
            <span
                v-if="!showOtpField"
                class="text-center rounded-md border px-1 py-0.5 cursor-pointer select-none bg-custom-blue-100/50 text-white"
                @click="showOtpField = true"
                >-> ثبت‌نام</span
            >
            <span
                v-if="showOtpField"
                class="text-center rounded-md border px-1 py-0.5 cursor-pointer select-none bg-custom-blue-100/50 text-white"
                @click="doRegister"
                >ثبت‌نام</span
            >
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Timer from "./Timer.vue";

export default {
    name: "auth",
    components: { Timer },
    data() {
        return {
            authData: {
                mobile: "",
                email: "",
                password: "",
                type: "",
                otp: "",
            },
            showOtpField: false,
        };
    },
    computed: {
        ...mapGetters("auth", ["user", "authenticated"]),
        ...mapState("auth", ["allowToSendOtp"]),
    },
    methods: {
        ...mapActions("auth", ["login", "logout", "sendOtp", "register"]),
        ...mapActions("cart", {
            showcart: "show",
        }),
        ...mapActions("wishlist", {
            wishlistShow: "show",
        }),
        doLogin() {
            if (this.authData.type == "mobile") {
                this.authData.email = "";
            }

            if (this.authData.type == "email") {
                this.authData.mobile = "";
            }

            this.login(this.authData).then(() => {
                if (this.authenticated) {
                    this.showcart();
                    this.wishlistShow();
                }
            });
        },
        doRegister() {
            this.register(this.authData).then(() => {
                this.showOtpField = false;
            });
        },
    },
};
</script>
