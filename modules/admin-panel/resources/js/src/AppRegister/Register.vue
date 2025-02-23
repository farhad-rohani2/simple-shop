<template>
    <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
    >
        <div class="flex flex-wrap w-full">
            <div class="w-full">
                <div
                    class="bb-register border-[1px] border-solid p-[30px] rounded-[20px]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div class="flex flex-wrap">
                        <div class="w-full px-[12px]">
                            <div
                                class="section-title mb-[20px] pb-[20px] z-[5] relative flex flex-col items-center text-center max-[991px]:pb-[0]"
                            >
                                <div
                                    class="section-detail max-[991px]:mb-[12px]"
                                >
                                    <h2
                                        class="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]"
                                    >
                                        Register
                                    </h2>
                                    <p
                                        class="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]"
                                    >
                                        Best place to buy and sell digital
                                        products
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-[12px]">
                            <form
                                method="post"
                                class="flex flex-wrap mx-[-12px]"
                            >
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >First Name*</label
                                    >
                                    <input
                                        v-model="form.firstName"
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter your first name"
                                        class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                        required
                                    />
                                </div>
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Last Name*</label
                                    >
                                    <input
                                        v-model="form.lastName"
                                        type="text"
                                        name="Lasttname"
                                        placeholder="Enter your Last name"
                                        class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                        required
                                    />
                                </div>

                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full] px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Region State*</label
                                    >
                                    <div
                                        class="custom-select w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                    >
                                        <custom-select
                                            :options="states"
                                            v-model="form.stateId"
                                        ></custom-select>
                                    </div>
                                </div>
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >City*</label
                                    >
                                    <div
                                        class="custom-select w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                    >
                                        <custom-select
                                            :options="cities"
                                            v-model="form.cityId"
                                        ></custom-select>
                                    </div>
                                </div>

                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >District*</label
                                    >
                                    <div
                                        class="custom-select w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                    >
                                        <custom-select
                                            :options="districts"
                                            v-model="form.districtId"
                                        ></custom-select>
                                    </div>
                                </div>
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Post Code*</label
                                    >
                                    <input
                                        v-model="form.zip"
                                        type="text"
                                        name="post-code"
                                        placeholder="Post Code"
                                        class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                        required
                                    />
                                </div>

                                <div
                                    class="bb-register-wrap w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Address*</label
                                    >
                                    <input
                                        v-model="form.address"
                                        type="text"
                                        name="phonenumber"
                                        placeholder="Address Line 1"
                                        class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                                        required
                                    />
                                </div>

                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Password*</label
                                    >
                                    <div class="flex flex-row flex-nowrap">

                                    <input
                                        v-model="form.password"
                                        :type="
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                        name="password"
                                        placeholder="Password"
                                        class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none !border-l-0"
                                        required
                                    />
                                    <button
                                        type="button"
                                        class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins tracking-[0.03rem] p-[10px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750] rounded-r-none text-nowrap"
                                        @mousedown="
                                                showPassword = true
                                            "
                                        @mouseup="
                                                showPassword = false
                                            "
                                    ></button>
                                </div>
                                </div>
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Password confirm*</label
                                    >
                                    <div class="flex flex-row flex-nowrap">
                                        <input
                                            v-model="form.password_confirmation"
                                            :type="
                                                showPasswordConfirm
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            name="passwordConfirm"
                                            placeholder="PasswordConfirm"
                                            class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none !border-l-0"
                                            required
                                        />
                                        <button
                                            type="button"
                                            class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins tracking-[0.03rem] p-[10px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750] rounded-r-none text-nowrap"
                                            @mousedown="
                                                showPasswordConfirm = true
                                            "
                                            @mouseup="
                                                showPasswordConfirm = false
                                            "
                                        ></button>
                                    </div>
                                </div>

                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Email*</label
                                    >
                                    <div class="flex flex-row flex-nowrap">
                                        <input
                                            v-model="form.email"
                                            type="text"
                                            name="email"
                                            placeholder="Enter your phone number"
                                            class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none !border-l-0"
                                            required
                                        />
                                        <input
                                            v-model="form.otp"
                                            type="text"
                                            name="otp"
                                            placeholder="Enter code"
                                            class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none rounded-r-none !border-l-0"
                                            required
                                        />
                                        <button
                                            type="button"
                                            class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins tracking-[0.03rem] p-[10px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750] rounded-r-none text-nowrap"
                                            :disabled="allowToSendOtp"
                                        >
                                            <span
                                                v-if="allowToSendOtp"
                                                @click="
                                                    form.type = 'email';
                                                    sendOtp(form);
                                                "
                                                >Send Otp</span
                                            >
                                            <timer v-else class="w-8" />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="bb-register-wrap w-[50%] max-[575px]:w-full px-[12px] mb-[24px]"
                                >
                                    <label
                                        class="inline-block mb-[6px] text-[14px] leading-[18px] font-medium text-[#3d4750]"
                                        >Phone Number*</label
                                    >
                                    <div class="flex flex-row flex-nowrap">
                                        <input
                                            v-model="form.mobile"
                                            type="text"
                                            name="phonenumber"
                                            placeholder="Enter your phone number"
                                            class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none !border-l-0"
                                            required
                                        />
                                        <input
                                            v-model="form.otp"
                                            type="text"
                                            name="otp"
                                            placeholder="Enter code"
                                            class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px] rounded-l-none rounded-r-none !border-l-0"
                                            required
                                        />
                                        <button
                                            type="button"
                                            class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins tracking-[0.03rem] p-[10px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750] rounded-r-none text-nowrap"
                                            :disabled="allowToSendOtp"
                                        >
                                            <span
                                                v-if="allowToSendOtp"
                                                @click="
                                                    form.type = 'mobile';
                                                    sendOtp(form);
                                                "
                                                >Send Otp</span
                                            >
                                            <timer v-else class="w-8" />
                                        </button>
                                    </div>
                                </div>

                                <div
                                    class="bb-register-button w-full flex justify-center"
                                >
                                    <button
                                        type="button"
                                        class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[4px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                                        @click.prevent="doRegister"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomSelect from "./CustomSelect.vue";
import Timer from "../AppCartMenu/Timer.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "Register",
    components: { Timer, CustomSelect },
    data() {
        return {
            form: {
                email: "",
                mobile: "",
                type: "",
                firstName: "",
                lastName: "",
                address: "",
                cityId: "",
                stateId: "",
                districtId: "",
                password: "",
                otp: "",
            },
            showPassword: false,
            showPasswordConfirm: false,
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
    },
    methods: {
        ...mapActions("auth", ["login", "logout", "sendOtp", "register"]),
        ...mapActions("cart", {
            showcart: "show",
        }),
        ...mapActions("address", ["getStates", "getCities", "getDistricts"]),
        doLogin() {
            if (this.form.type === "mobile") {
                this.form.email = "";
            }

            if (this.form.type === "email") {
                this.form.mobile = "";
            }

            this.login(this.form).then(() => {
                if (this.authenticated) {
                    this.showcart();
                }
            });
        },
        doRegister() {
            this.register(this.form).then(() => {
                this.showOtpField = false;
            });
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
    },
};
</script>

<style scoped></style>
