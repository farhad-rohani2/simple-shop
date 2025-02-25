import {createApp} from "vue";
import axios from "./axios/axios.js";

import store from "./store/index.js";
import router from "./router/index.js";

window.axios = axios;


import App from "./App.vue";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

