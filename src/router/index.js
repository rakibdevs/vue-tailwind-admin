import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/components/Login.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Login,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router