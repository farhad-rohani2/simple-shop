<template>
    <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
    >
        <div class="flex flex-wrap w-full">
            <div class="w-full px-[12px]">
                <div
                    class="section-title mb-[20px] pb-[20px] relative flex flex-col items-center text-center max-[991px]:pb-[0]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div class="section-detail max-[991px]:mb-[12px]">
                        <h2
                            class="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]"
                        >
                            {{ blade.title }}
                            <span
                                class="text-[#6c7fd8]"
                                v-text="blade.boldTitle"
                            ></span>
                        </h2>
                        <p
                            class="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]"
                            v-text="blade.text"
                        ></p>
                    </div>
                </div>
            </div>
            <div class="w-full px-[12px]">
                <div
                    class="bb-login-contact max-w-[500px] m-[auto] border-[1px] border-solid border-[#eee] p-[30px] rounded-[20px]"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <form>

                        <div class="bb-login-wrap mb-[24px] flex justify-center gap-2 flex-wrap">
                            <label
                                for="email"
                                class="block w-full font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]"
                            >Login With*</label
                            >
                            <div class="checkout-radio flex mb-[10px] max-[480px]:flex-col gap-24">
                                <div class="radio-itens mr-[20px]">
                                    <input v-model="form.type"  type="radio" id="del1" name="type" value="mobile" class="w-auto mr-[2px] p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]" checked="">
                                    <label for="del1" class="text-[14px] font-normal text-[#686e7d] relative pl-[26px] cursor-pointer leading-[16px] inline-block tracking-[0]">Mobile</label>
                                </div>
                                <div class="radio-itens">
                                    <input v-model="form.type" type="radio" id="del2" name="type" value="email" class="w-auto mr-[2px] p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]">
                                    <label for="del2" class="text-[14px] font-normal text-[#686e7d] relative pl-[26px] cursor-pointer leading-[16px] inline-block tracking-[0]">Email</label>
                                </div>
                            </div>

                        </div>
                        <div v-if="form.type==='email'"  class="bb-login-wrap mb-[24px]" >
                            <label
                                for="email"
                                class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]"
                                >Email*</label
                            >
                            <input
                                v-model="form.email"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                            />
                        </div>
                        <div v-if="form.type==='mobile'" class="bb-login-wrap mb-[24px]">
                            <label
                                for="mobile"
                                class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]"
                                >Mobile*</label
                            >
                            <input
                                v-model="form.mobile"
                                type="text"
                                id="mobile"
                                name="mobile"
                                placeholder="Enter Your Mobile"
                                class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                            />
                        </div>
                        <div class="bb-login-wrap mb-[24px]">
                            <label
                                for="email"
                                class="inline-block font-Poppins text-[15px] font-normal text-[#686e7d] leading-[26px] tracking-[0.02rem]"
                                >Password*</label
                            >
                            <input
                                v-model="form.password"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                class="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] leading-[26px] rounded-[10px]"
                            />
                        </div>
                        <div class="bb-login-wrap mb-[24px]">
                            <a-component
                                :source="blade"
                                append="ForgetPassword"
                                classes="font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#777]"
                            />
                        </div>
                        <div
                            class="bb-login-button m-[-5px] flex justify-between"
                        >
                            <button
                                class="bb-btn-2 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] m-[5px] py-[4px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                                type="submit"
                                @click.prevent="doLogin"
                            >
                                Login
                            </button>
                            <a-component
                                :source="blade"
                                append="Register"
                                classes="h-[36px] m-[5px] flex items-center font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import AComponent from "./AComponent.vue";

export default {
    name: "Login",
    components: { AComponent },
    data() {
        return {
            form: {
                email: "",
                mobile: "",
                type: "mobile",
                password: "",
            },
            showPassword: false,
            showPasswordConfirm: false,
        };
    },
    computed: {
        ...mapGetters("auth", ["user", "authenticated"]),
    },
    methods: {
        ...mapActions("auth", ["login"]),
        ...mapActions("cart", {
            showcart: "show",
        }),
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
    },
    mounted() {
        AOS.init({
            once: true,
        });
    },
};
</script>

<style scoped></style>
