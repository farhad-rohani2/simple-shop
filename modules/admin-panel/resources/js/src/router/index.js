import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import AddProduct from '../pages/AddProduct.vue'
import EditProduct from '../pages/EditProduct.vue'
import Login from "../pages/Login.vue";


const routes = [
    { path: '/', name: 'product-list', component: ProductList },
    { path: '/auth', name: 'login', component: Login },
    { path: '/add-product', name: 'add-product', component: AddProduct },
    { path: '/edit-product/:id', name: 'edit-product', component: EditProduct, props: true },
]

const router = createRouter({
    history: createWebHistory('/admin'),
    routes,
})

export default router;
