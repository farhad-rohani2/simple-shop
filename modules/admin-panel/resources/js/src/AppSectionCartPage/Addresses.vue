<template>
    <div>
        <h2 class="text-lg p-2 font-zzz2">انتخاب آدرس تحویل</h2>
        <div class="flex flex-col flex-nowrap gap-2">
            <listAddresses />
            <newAddress />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ListAddresses from "./ListAddresses.vue";
import NewAddress from "./NewAddress.vue";

export default {
    name: "AppSectionCartPage",
    components: { NewAddress, ListAddresses },
};
</script>
