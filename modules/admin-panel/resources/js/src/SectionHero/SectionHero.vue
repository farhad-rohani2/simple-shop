<template>
    <div
        class="bb-social-follow absolute left-[20px] bottom-[30px] max-[1250px]:hidden"
    >
        <ul class="inner-links">
            <li
                class="p-[6px] rotate-[270deg]"
                v-for="innerLink in blade.innerLinks"
            >
                <a
                    :href="innerLink.link"
                    class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase"
                    v-text="innerLink.text"
                ></a>
            </li>
        </ul>
    </div>
    <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
    >
        <div class="flex flex-wrap w-full">
            <div class="w-full">
                <div class="hero-slider swiper-container">
                    <div class="swiper-wrapper">
                        <div
                            :class="`swiper-slide slide-${index}`"
                            v-for="(slide, index) in blade.slides"
                        >
                            <div class="flex flex-wrap w-full mb-[-24px]">
                                <div
                                    class="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-1 order-2 mb-[24px]"
                                >
                                    <div
                                        class="hero-contact h-full flex flex-col items-start justify-center max-[991px]:items-center"
                                    >
                                        <p
                                            class="mb-[20px] font-Poppins text-[18px] text-[#777] font-light leading-[28px] tracking-[0.03rem] max-[1199px]:mb-[10px] max-[1199px]:text-[16px]"
                                            v-text="slide.paragraph"
                                        ></p>
                                        <h1
                                            class="mb-[20px] font-quicksand text-[50px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[1199px]:mb-[10px] max-[1199px]:text-[38px] max-[991px]:text-center max-[991px]:text-[45px] max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]"
                                        >
                                            {{ slide.headerText1 }}
                                            <span
                                                class="relative text-[#6c7fd8]"
                                                v-text="slide.headerText2"
                                            ></span
                                            ><br />
                                            {{ slide.headerText3 }}
                                        </h1>
                                        <a-component
                                            :source="slide"
                                            classes="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-2 order-1 mb-[24px]"
                                >
                                    <div
                                        class="hero-image pr-[50px] relative max-[991px]:px-[50px] max-[575px]:px-[30px] flex justify-center max-[420px]:p-[0]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 300 300"
                                            class="animate-shape w-[120%] absolute top-[-50px] right-[-50px] z-[-1] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]"
                                        >
                                            <linearGradient
                                                id="shape_1"
                                                x1="100%"
                                                x2="0%"
                                                y1="100%"
                                                y2="0%"
                                            ></linearGradient>
                                            <path d="">
                                                <animate
                                                    repeatCount="indefinite"
                                                    attributeName="d"
                                                    dur="15s"
                                                    :values="shape"
                                                />
                                            </path>
                                        </svg>
                                        <img-component
                                            :source="slide"
                                            append="Slider"
                                            classes="w-full pb-[50px] opacity-[1] max-[1199px]:pr-[30px] max-[991px]:pr-[0] max-[575px]:pb-[30px] max-[420px]:pb-[15px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-white"
                    ></div>
                    <div class="swiper-buttons">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="bb-scroll-Page absolute right-[-15px] bottom-[75px] rotate-[270deg] max-[575px]:hidden"
    >
        <span
            class="scroll-bar transition-all duration-[0.3s] ease-in-out relative max-[1250px]:hidden"
        >
            <a
                href="javascript:void(0)"
                class="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium leading-[28px] tracking-[0.03rem] text-[#686e7d]"
                v-text="blade.scrollPage"
            ></a>
        </span>
    </div>
</template>

<script>
import AComponent from "../AppLogin/AComponent.vue";
import ImgComponent from "../Component/ImgComponent.vue";

export default {
    name: "SectionHero",
    components: { ImgComponent, AComponent },
    data() {
        return {
            shape: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z",
        };
    },
    mounted() {
        /* Hero Shape */
        // var shape =
        //     "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z";
        // $(window).on("load", function () {
        //     $(".animate-shape animate").attr("values", shape);
        // });

        /* Hero slider */
        var BryMainSlider = new Swiper(".hero-slider.swiper-container", {
            loop: true,
            centeredSlides: true,
            autoplay: this.blade.sliderAutoPlay
                ? {
                      delay: 5000,
                  }
                : false,
            speed: this.blade.sliderAutoPlay ? 1000 : 2500,
            effect: "fade",
            parallax: true,
            autoHeight: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        /* Hero scroll Page */
        $(".bb-scroll-Page").on("click", function (event) {
            event.preventDefault();
            var duration = 550;
            $("html, body").animate({ scrollTop: 1000 }, duration);
            return false;
        });
    },
};
</script>

<style scoped></style>
