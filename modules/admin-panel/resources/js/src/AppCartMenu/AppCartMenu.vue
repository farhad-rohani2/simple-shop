<template>
    <div class="text-sm font-semibold leading-6 text-gray-900 relative" @mouseenter="show" v-click-out-side="hidden">
        <div
            class="text-sm font-semibold leading-6 text-gray-900 relative"
            v-text="authenticated ? 'سبد خرید' : 'ورود یا ثبت نام'"
        ></div>

        <cart v-if="authenticated" v-show="isShow"/>
        <!--        <auth v-else v-show="true"  />-->
        <auth v-else  v-show="isShow" />
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Auth from "./Auth.vue";
import Cart from "./Cart.vue";
import ClickOutsideDirective from "../directives/ClickOutsideDirective.js";

export default {
    name: "AppCartMenu",
    components: { Cart, Auth },
    data() {
        return {
            isShow: false,
            timeout: {},
        };
    },
    computed: {
        ...mapGetters("auth", ["authenticated"]),
    },
    directives: {
        "clickOutSide":ClickOutsideDirective
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
    },
};
</script>
