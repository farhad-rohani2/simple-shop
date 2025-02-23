<template>
    <div class="dealend-timer">
        <div class="time-block">
            <div class="time" v-text="d"></div>
            <span class="day">Days</span>
        </div>
        <div class="time-block">
            <div class="time" v-text="h"></div>
            <span class="dots">:</span>
        </div>
        <div class="time-block">
            <div class="time" v-text="m"></div>
            <span class="dots">:</span>
        </div>
        <div class="time-block">
            <div class="time" v-text="s"></div>
            <span class="dots"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DealendTimer",
    data() {
        return {
            d: null,
            h: null,
            m: null,
            s: null,
        };
    },
    methods: {
        updateTimer() {
            let future = Date.parse(this.blade.date);
            let now = new Date();
            let diff = future - now;

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let mins = Math.floor(diff / (1000 * 60));
            let secs = Math.floor(diff / 1000);

            this.d = days;
            this.h = hours - days * 24;
            this.m = mins - hours * 60;
            this.s = secs - mins * 60;
        },
    },
    mounted() {
        setInterval(() => {
            this.updateTimer();
        }, 1000);
    },
};
</script>

<style scoped></style>
