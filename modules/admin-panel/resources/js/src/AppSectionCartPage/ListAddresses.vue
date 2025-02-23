<template>
    <div
        v-for="address in addresses"
        :class="[
            'flex flex-row flex-wrap p-2 border rounded-md cursor-pointer gap-x-8 gap-y-2',
            selectedAddress.id === address.id ? 'border-custom-blue-100/50 border-r-4' : '',
        ]"
        @click="select(address)"
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
        <div
            class="flex bg-custom-red-100 items-center rounded-full cursor-pointer w-6 h-6 justify-center m-1 mr-auto"

            @click="removeAddress({ addressId: address.id })"
        >
            <img
                alt="plus icon"
                loading="lazy"
                width="16"
                height="16"
                src="../../assets/icons/trash-grey-500.svg"
                class="white-filter"
            />
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
    methods: {
        ...mapActions("address", [
            "getAddresses",
            "select",
            "removeAddress"
        ]),
    },
    mounted() {
        this.getAddresses();
    },
};
</script>
