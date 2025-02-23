import { createApp, defineAsyncComponent } from "vue";
import axios from "./axios/axios.js";

import store from "./store/index.js";
// import AppCartMenu from "./AppCartMenu/AppCartMenu.vue";
// import AppAddProductToCart from "./AppAddProductToCart.vue";

import {Model} from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios
window.axios = axios;


// if (document.getElementById("cart")) {
//     const app = createApp(AppCartMenu);
//     app.use(store);
//     app.config.globalProperties.blade = window.blade;
//     app.mount("#cart");
// }
//
// if (
//     document.getElementById("add-to-cart") || document.getElementById("add-to-cart-phone")
// ) {
//     const app6 = createApp(AppAddProductToCart);
//     app6.use(store);
//     app6.config.globalProperties.blade = window.blade;
//
//     if (window.innerWidth > 768) {
//         app6.mount("#add-to-cart");
//     } else {
//         app6.mount("#add-to-cart-phone");
//     }
// }

//
// if (document.getElementById("cart-section")) {
//     const app3 = createApp(defineAsyncComponent(() => import("./AppSectionCartPage/AppSectionCartPage.vue")));
//     app3.use(store);
//     app3.config.globalProperties.blade = window.blade;
//     app3.mount("#cart-section");
// }
//
// if (document.getElementById("order-section")) {
//     const app3 = createApp(defineAsyncComponent(() => import("./AppSectionOrderPage/AppSectionOrderPage.vue")));
//     app3.use(store);
//     app3.config.globalProperties.blade = window.blade;
//     app3.mount("#order-section");
// }
//
// if (document.getElementById("profile-section")) {
//     const app3 = createApp(defineAsyncComponent(() => import("./AppSectionProfilePage/AppSectionProfilePage.vue")));
//     app3.use(store);
//     app3.config.globalProperties.blade = window.blade;
//     app3.mount("#profile-section");
// }


if (document.getElementById("header-search")) {
    const appBottomHeader = createApp(defineAsyncComponent(() => import("./AppBottomHeader/HeaderSearch.vue")));
    appBottomHeader.use(store);
    appBottomHeader.config.globalProperties.blade = window.bladeBottomHeader;
    appBottomHeader.mount("#header-search");
}

if (document.getElementById("header-buttons")) {
    const appBottomHeader = createApp(defineAsyncComponent(() => import("./AppBottomHeader/HeaderButtons.vue")));
    appBottomHeader.use(store);
    appBottomHeader.config.globalProperties.blade = window.bladeBottomHeader;
    appBottomHeader.mount("#header-buttons");
}

if (document.getElementById("register")) {
    const appBottomHeader = createApp(defineAsyncComponent(() => import("./AppRegister/Register.vue")));
    appBottomHeader.use(store);
    appBottomHeader.config.globalProperties.blade = window.blade;
    appBottomHeader.mount("#register");
}

if (document.getElementById("login")) {
    const appBottomHeader = createApp(
        defineAsyncComponent(() => import("./AppLogin/Login.vue")),
    );
    appBottomHeader.use(store);
    appBottomHeader.config.globalProperties.blade = window.bladeLogin;
    appBottomHeader.mount("#login");
}

if (document.getElementById("cart-sidebar")) {
    const appBottomHeader = createApp(
        defineAsyncComponent(() => import("./AppCartSidebar/CartSidebar.vue")),
    );
    appBottomHeader.use(store);
    appBottomHeader.config.globalProperties.blade = window.bladeCartSidebar;
    appBottomHeader.mount("#cart-sidebar");
}

if (document.getElementById("section-cart")) {
    const appBottomHeader = createApp(
        defineAsyncComponent(() => import("./AppCart/Cart.vue")),
    );
    appBottomHeader.use(store);
    // appBottomHeader.config.globalProperties.blade = window.bladeCartSidebar;
    appBottomHeader.mount("#section-cart");
}

if (document.getElementById("section-hero")) {
    const app3 = createApp(defineAsyncComponent(() => import("./SectionHero/SectionHero.vue")));
    app3.use(store);
    app3.config.globalProperties.blade = window.bladeSectionHero;
    app3.mount("#section-hero");
}

// if (document.getElementById("section-category")) {
//     const app3 = createApp(defineAsyncComponent(() => import("./SectionCategory/SectionCategory.vue")));
//     app3.use(store);
//     app3.config.globalProperties.blade = window.bladeSectionHero;
//     app3.mount("#section-category");
// }


let elementsByClassName = document.getElementsByClassName("bb-pro-actions");
Array.from(elementsByClassName).forEach(function (item) {
    let attribute = item.getAttribute('adId');
    if (attribute) {
        const app3 = createApp(defineAsyncComponent(() => import("./ProActions/ProActions.vue")));
        app3.use(store);
        app3.config.globalProperties.blade = {'adId':attribute};
        app3.mount(item);
    }
});

if (document.getElementById("quick-view-modal")) {
    const app3 = createApp(defineAsyncComponent(() => import("./QuickView/QuickView.vue")));
    app3.use(store);
    app3.config.globalProperties.blade = window.bladeQuickViewModal;
    app3.mount("#quick-view-modal");
}

let dealend = document.getElementById("dealend");
if (dealend) {
    let attribute = dealend.getAttribute('date');
    if (attribute) {
        const app3 = createApp(defineAsyncComponent(() => import("./DealendTimer/DealendTimer.vue")));
        app3.use(store);
        app3.config.globalProperties.blade = {
            'date':attribute
        };
        app3.mount("#dealend");
    }
}


let productProActions = document.getElementById("product-pro-actions");
if (productProActions) {
    let attribute = productProActions.getAttribute('productId');
    if (attribute) {
        const app3 = createApp(defineAsyncComponent(() => import("./Product/ProActions.vue")));
        app3.use(store);
        app3.config.globalProperties.blade = {
            'adId':attribute
        };
        app3.mount("#product-pro-actions");
    }
}
