<template>
    <a :href="link" :class="classes" v-text="text"></a>
</template>
<script>
export default {
    name: "a-component",
    props: {
        classes: {
            type: String,
            required: false,
            default: "",
        },
        append: {
            type: String,
            required: false,
            default: "",
        },
        source: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        text() {
            return this.source["text" + this.append];
        },
        link() {
            let link = this.source["link" + this.append];
            if (link === "custom") {
                return this.source["customLink" + this.append];
            } else {
                return link;
            }
        },
    },
};
</script>
