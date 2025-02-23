<template>
    <div
        class="flex flex-row flex-wrap md:flex-nowrap max-w-7xl mx-auto justify-center gap-8 select-none px-2 md:px-0 "
    >
        <div
            class="basis-full md:basis-2/5 flex flex-col gap-8 mb-8 shrink grow-0"
        >
            <cartItems />
            <addresses />
            <select-post-type />
        </div>
        <report />
    </div>
</template>

<script>
import CartItems from "./CartItems.vue";
import Report from "./Report.vue";
import Addresses from "./Addresses.vue";
import SelectPostType from "./SelectPostType.vue";

export default {
    name: "AppSectionCartPage",
    components: { SelectPostType, Report, CartItems, Addresses },
};
</script>

<style></style>
