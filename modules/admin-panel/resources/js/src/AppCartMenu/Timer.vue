<template>
    <div v-if="countDown && !this.allowToSendOtp">
        {{ countDown }}
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "timer",
    methods: {
        countDownTimer() {
            if (this.countDown > 0 && !this.allowToSendOtp) {
                setTimeout(() => {
                    this.setCountDown(this.countDown - 1);
                    this.countDownTimer();
                }, 1000);
            } else {
                this.setAllowToSendOtp(true);
            }
        },
        ...mapActions("auth", ["setAllowToSendOtp",'setCountDown']),
    },
    computed: {
        ...mapGetters("auth", ["countDown",'allowToSendOtp']),
    },
    created() {
        this.countDownTimer();
    },
};
</script>
