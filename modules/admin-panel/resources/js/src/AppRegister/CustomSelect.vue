<template>
    <div  class="select" :tabindex="tabindex" @blur="hidden()">
        <div v-if="selected"
            class="custom-select"
            @click="open = !open"
            v-text="selected?.name"
        ></div>
        <div v-else-if="options.length"
             class="custom-select"
             @click="open = !open"
        >یک مورد را انتخاب کنید</div>
        <div v-else
            class="custom-select"
        >گزینه‌ای برای انتخاب وجود ندارد</div>
        <ul
            class="select-options"
            :style="{ display: open ? 'block' : 'none' }"
        >
            <li
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option;
                    hidden();
                    $emit('update:modelValue', option.id);
                "
                v-text="option.name"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "CustomSelect",
    props: {
        options: {
            type: Array,
            required: true,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.options.length > 0 ? this.options[0] : null,
            open: false,
        };
    },
    methods: {
        show() {
            this.open = true;
        },
        hidden() {
            this.open = false;
        },
    },
    mounted() {
        if (this.selected) {
            this.$emit("update:modelValue", this.selected.id);
        }
    },
    watch: {
        options(newValue, oldValue) {
            if (newValue.length) {
                this.selected = newValue[0];
            }else {
                this.selected = null;
            }
        },
    },
};
</script>

<style scoped></style>
