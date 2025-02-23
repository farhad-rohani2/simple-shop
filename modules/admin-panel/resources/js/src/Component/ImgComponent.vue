<template>
    <img
        :src="src"
        :alt="alt"
        :class="classes"
    />
</template>

<script>
export default {
    name: "ImgComponent",
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
        alt() {
            return this.source["mediaAlt" + this.append];
        },
        src() {
            return  this.source["url" + this.append];
        },
    },
}
</script>

<style scoped>

</style>
