<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 class="text-2xl font-bold text-center mb-4">{{ isLoginMode ? "Login" : "Register" }}</h2>

            <form @submit.prevent="submitForm" class="space-y-4">
                <div v-if="!isLoginMode">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="name"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div v-if="!isLoginMode">
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        v-model="password_confirmation"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        :disabled="isLoading"
                    >
                        <span v-if="isLoading">Loading...</span>
                        <span v-else>{{ isLoginMode ? "Login" : "Register" }}</span>
                    </button>
                </div>
                <div v-if="errorMessage" class="text-red-500 text-sm mt-2">
                    {{ errorMessage }}
                </div>
            </form>

            <div class="text-center mt-4">
                <button @click="toggleMode" class="text-blue-500 hover:underline">
                    {{ isLoginMode ? "Don't have an account? Register" : "Already have an account? Login" }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            isLoading: false,
            isLoginMode: true, // برای تغییر بین ثبت‌نام و ورود
        };
    },
    computed: {
        ...mapState("auth", ["errorMessage"]),
    },
    methods: {
        ...mapActions("auth", ["login", "register"]),

        async submitForm() {
            this.isLoading = true;
            if (this.isLoginMode) {
                await this.login({ email: this.email, password: this.password });
            } else {
                await this.register({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                });
            }
            this.isLoading = false;
            if (!this.errorMessage) {
                this.$router.push({ name: "product-list" });
            }
        },

        toggleMode() {
            this.isLoginMode = !this.isLoginMode;
            this.errorMessage = ""; // پاک کردن خطا هنگام تغییر فرم
        },
    },
};
</script>
