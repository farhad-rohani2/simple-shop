import { createRouter, createWebHistory } from 'vue-router'
import store from "../store";

import ProductList from '../pages/product/ProductList.vue'
import AddProduct from '../pages/product/AddProduct.vue'
import EditProduct from '../pages/product/EditProduct.vue'

import OrderList from '../pages/order/OrderList.vue'
import AddOrder from '../pages/order/AddOrder.vue'
import EditOrder from '../pages/order/EditOrder.vue'

import Login from "../pages/Login.vue";


const routes = [
    { path: '/auth', name: 'login', component: Login , meta: { guest: true }},

    { path: '/', name: 'product-list', component: ProductList , meta: { requiresAuth: true } },
    { path: '/add-product', name: 'add-product', component: AddProduct , meta: { requiresAuth: true } },
    { path: '/edit-product/:id', name: 'edit-product', component: EditProduct, props: true , meta: { requiresAuth: true } },

    { path: '/orders', name: 'order-list', component: OrderList , meta: { requiresAuth: true } },
    { path: '/add-order', name: 'add-order', component: AddOrder , meta: { requiresAuth: true } },
    { path: '/edit-order/:id', name: 'edit-order', component: EditOrder, props: true , meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory('/admin'),
    routes,
})

// Navigation Guard for Login Checking
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.auth.authenticated; // Login Status of Vuex

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'login' });
    } else {
        next(); // Continue Path
    }
});

export default router;
