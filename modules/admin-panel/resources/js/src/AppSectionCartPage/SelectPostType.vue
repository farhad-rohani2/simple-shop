<template>
    <div>
        <h2 class="text-lg p-2 font-zzz2">انتخاب روش ارسال</h2>
        <div class="flex flex-col flex-nowrap gap-2">
            <div
                v-for="cartPostType in cartPostTypes"
                :class="[
                    'flex flex-row flex-nowrap p-2 border rounded-md cursor-pointer gap-x-8 gap-y-2 justify-between',
                    selectedCartPostType.id === cartPostType.id
                        ? 'border-custom-blue-100/50 border-r-4'
                        : '',
                ]"
                @click="select(cartPostType)"
            >
                <span class="font-zzz1" v-text="cartPostType.title"></span>
                <span class="font-zzz2" v-text="cartPostType.condition[0].data.value+' تومان '"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "SelectPostType",
    methods: {
        ...mapActions("cartPostType", ["index", "select"]),
    },
    computed: {
        ...mapState("cartPostType", ["cartPostTypes", "selectedCartPostType"]),
    },
    mounted() {
        this.index();
    },
};
</script>
