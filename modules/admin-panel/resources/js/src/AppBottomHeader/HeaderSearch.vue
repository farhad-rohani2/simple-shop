<template>
    <form
        class="bb-btn-group-form flex relative max-[991px]:ml-[20px] max-[767px]:m-[0]"
    >
        <div
            class="inner-select border-r-[1px] border-solid border-[#eee] h-full px-[20px] flex items-center absolute top-[0] left-[0] max-[991px]:hidden"
        >
            <div
                class="custom-select w-[100px] capitalize text-[#777] flex items-center justify-between transition-all duration-[0.2s] ease-in text-[14px] relative"
            >
                <custom-select-2
                    :default="initSelectedCategory"
                    :options="categories"
                    v-model="form.selectedCategory"
                ></custom-select-2>
            </div>
        </div>
        <input
            class="form-control bb-search-bar bg-[#fff] block w-full min-h-[45px] h-[48px] py-[10px] pr-[10px] pl-[160px] max-[991px]:min-h-[40px] max-[991px]:h-[40px] max-[991px]:p-[10px] text-[14px] font-normal leading-[1] text-[#777] rounded-[10px] border-[1px] border-solid border-[#eee] tracking-[0.5px]"
            placeholder="Search products..."
            type="text"
            v-model="form.search"
        />
        <button
            class="submit absolute top-[0] left-[auto] right-[0] flex items-center justify-center w-[45px] h-full bg-transparent text-[#555] text-[16px] rounded-[0] outline-[0] border-[0] padding-[0]"
            @click.prevent="doSearch"
        >
            <i
                class="ri-search-line text-[18px] leading-[12px] text-[#555]"
            ></i>
        </button>
    </form>
</template>
<script>
import ClickOutsideDirective from "../directives/ClickOutsideDirective.js";
import Ad from "@/models/ads/Ad.js";
import { mapActions, mapGetters, mapState } from "vuex";
import CustomSelect2 from "@/Component/CustomSelect2.vue";

export default {
    name: "header-search",
    components: { CustomSelect2 },
    data() {
        return {
            form: {
                selectedCategory: "",
                search: "",
            },
        };
    },
    directives: {
        clickOutSide: ClickOutsideDirective,
    },
    computed: {
        ...mapState("adCategory", ["categories"]),
        initSelectedCategory() {
            if (this.categories.length) {
                let str = window.location.href;

                str = str.substring(
                    str.indexOf("category/") + 9,
                    str.lastIndexOf("/?"),
                );

                if (str !== '/') {
                    return this.categories.find(category => category.slug === str);
                }
            }
        },
    },
    methods: {
        ...mapActions("adCategory", ["getCategories"]),
        ...mapGetters("adCategory", ["find"]),

        doSearch() {
            let ad = new Ad();
            let dd = ad.where("search", this.form.search);
            let y = {};
            let message = dd._builder
                .query()
                .split("&")
                .map(function (value, index) {
                    let split = value.split("=");
                    if (index === 0) {
                        split[0] = split[0].replace("?", "");
                    }
                    return split;
                })
                .forEach(function (value, index) {
                    y[value[0]] = value[1];
                });

            // message;

            let categorySlug = "";
            categorySlug = this.form.selectedCategory?.slug;
            if (categorySlug) {
                categorySlug = categorySlug + "/";
            } else {
                categorySlug = "";
            }

            window.location.href =
                this.blade.linkCategory +
                "/" +
                categorySlug +
                dd._builder.query();

            dd.get();
        },
    },
    mounted() {
        const searchParams = new URLSearchParams(window.location.search);
        this.form.search = searchParams.get("filter[search]");
        this.getCategories(this.blade.categoryDeep);
    },
};
</script>
