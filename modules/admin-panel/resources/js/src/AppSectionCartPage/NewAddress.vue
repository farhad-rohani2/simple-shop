<template>
    <div
        class='flex flex-row flex-wrap gap-2 border rounded-md px-10 py-2'
    >
        <div v-if="show" class="flex justify-between gap-2 items-center basis-full">
            <span class="font-zzz1 text-nowrap"> استان: </span>
            <span class="font-zzz2 text-nowrap">
                <v-select
                    label="name"
                    v-model="selectedState"
                    :options="states"
                    dir="rtl"
                    :loading="statesLoading"
                    :reduce="(option) => option.id"
                >
                    <template v-slot:option="option">
                        {{ option.name }}
                    </template>
                    <template #no-options="{ search, searching, loading }">
                        موردی یافت نشد.
                    </template>
                </v-select>
            </span>
        </div>
        <div v-if="show" class="flex justify-between gap-2 items-center basis-full">
            <span class="font-zzz1 text-nowrap"> شهر: </span>
            <span class="font-zzz2 text-nowrap">
                <v-select
                    label="name"
                    v-model="selectedCity"
                    :options="cities"
                    dir="rtl"
                    :loading="citiesLoading"
                    :reduce="(option) => option.id"
                >
                    <template v-slot:option="option">
                        {{ option.name }}
                    </template>
                    <template #no-options="{ search, searching, loading }">
                        موردی یافت نشد.
                    </template>
                </v-select>
            </span>
        </div>
        <div v-if="show" class="flex justify-between gap-2 items-center basis-full">
            <span class="font-zzz1 text-nowrap"> محله: </span>
            <span class="font-zzz2 text-nowrap">
                <v-select
                    label="name"
                    v-model="selectedDistrict"
                    :options="districts"
                    dir="rtl"
                    :loading="districtsLoading"
                    :reduce="(option) => option.id"
                >
                    <template v-slot:option="option">
                        {{ option.name }}
                    </template>
                    <template #no-options="{ search, searching, loading }">
                        موردی یافت نشد.
                    </template>
                </v-select>
            </span>
        </div>
        <div v-if="show" class="flex justify-between gap-2 items-center basis-full">
            <span class="font-zzz1 text-nowrap"> آدرس: </span>
            <span class="font-zzz2 text-nowrap flex">
                <textarea
                    type="text"
                    v-model="address"
                    class="rounded border border-custom-gray-300 px-2 py-1 w-72"
                />
            </span>
        </div>
        <div v-if="show" class="flex justify-between gap-2 items-center basis-full">
            <span class="font-zzz1 text-nowrap"> کد پستی: </span>
            <span class="font-zzz2 text-nowrap">
                <input
                    type="text"
                    v-model="zip"
                    class="rounded border border-custom-gray-300 px-2 py-1 w-72"
                />
            </span>
        </div>
        <div v-if="show" @click="show=!show" class="flex justify-center gap-2 items-center self-center w-full" >
            <span
                class="font-zzz1 text-nowrap border rounded-md border-custom-green-100 text-white bg-custom-green-100 p-2 cursor-pointer select-none"
                @click="store"
                >اضافه کردن</span
            >
            <span
                class="font-zzz1 text-nowrap border rounded-md border-custom-blue-100 text-white bg-custom-blue-100/60 p-2 cursor-pointer select-none"
            >بستن</span>
        </div>
<!--        <div v-if="show"  @click="show=!show" class="flex justify-center gap-2 items-center self-center w-full" >-->
<!--            <span-->
<!--                class="font-zzz1 text-nowrap border rounded-md border-custom-green-100 text-white bg-custom-green-100 p-2 cursor-pointer select-none"-->
<!--                >بستن</span>-->
<!--        </div>-->
        <div v-if="!show"  @click="show=!show" class="flex justify-center gap-2 items-center self-center w-full" >
            <span
                class="font-zzz1 text-nowrap border rounded-md border-custom-green-100 text-white bg-custom-green-100 p-2 cursor-pointer select-none"
                >اضافه کردن</span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import vSelect from "vue-select";

export default {
    name: "newAddress",
    components: { vSelect },
    data() {
        return {
            selectedState: null,
            selectedCity: null,
            selectedDistrict: null,
            zip: "",
            address: "",
            show:false
        };
    },
    computed: {
        ...mapGetters("address", [
            "newAddress",
            "states",
            "cities",
            "districts",
        ]),
        ...mapState("address", [
            "statesLoading",
            "citiesLoading",
            "districtsLoading",
        ]),
    },
    methods: {
        ...mapActions("address", [
            "createAddress",
            "setNewAddressState",
            "getStates",
            "getCities",
            "getDistricts",
        ]),
        store() {
            this.createAddress({
                state_id: this.selectedState,
                city_id: this.selectedCity,
                district_id: this.selectedDistrict,
                zip: this.zip,
                address: this.address,
            });

            this.selectedState = null;
            this.selectedCity = null;
            this.selectedDistrict = null;
            this.zip = null;
            this.address = null;
        },
    },
    watch: {
        selectedState(newSelectedState, oldSelectedState) {
            if (newSelectedState !== null) {
                this.selectedCity = null;
                this.selectedDistrict = null;
                this.getCities({ state_id: newSelectedState });
            }
        },
        selectedCity(newSelectedCity, oldSelectedCity) {
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
};
</script>

<style>
@import "vue-select/dist/vue-select.css";

.vs__dropdown-toggle {
    @apply w-72;
}

.vs__actions {
    @apply gap-2 justify-around px-2;
}

.vs__spinner{
    @apply mt-1
}

.vs__open-indicator {
    @apply mt-1;
}

.vs__clear {
    @apply mt-1;
}
</style>
