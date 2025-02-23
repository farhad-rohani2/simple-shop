<template>
    <div
        class="flex flex-row flex-wrap p-2 border rounded-md cursor-pointer gap-x-8 gap-y-2"
    >
        <div class="flex justify-between gap-2">
            <span class="font-zzz1 text-nowrap"> استان: </span>
            <span class="font-zzz2 text-nowrap" v-text="address?.state?.name"></span>
        </div>
        <div class="flex justify-between gap-2">
            <span class="font-zzz1 text-nowrap"> شهر: </span>
            <span class="font-zzz2 text-nowrap" v-text="address?.city?.name"></span>
        </div>
        <div class="flex justify-between gap-2">
            <span class="font-zzz1 text-nowrap"> ناحیه: </span>
            <span class="font-zzz2 text-nowrap" v-text="address?.district?.name"></span>
        </div>
        <div class="flex justify-between gap-2">
            <span class="font-zzz1 text-nowrap"> آدرس: </span>
            <span class="font-zzz2 text-nowrap" v-text="address.address"></span>
        </div>
        <div class="flex justify-between gap-2">
            <span class="font-zzz1 text-nowrap"> کد پستی: </span>
            <span class="font-zzz2 text-nowrap" v-text="address.zip"></span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "listAddresses",
    computed: {
        ...mapGetters("address", [
            "addresses",
            "selectedAddress",
        ]),
    },
};
</script>
