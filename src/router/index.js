import {createRouter, createWebHistory} from 'vue-router'
import FormPage from "../pages/FormPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     name: 'home',
        //     path: '/',
        //     component: FormPage
        // }
    ]
})

export default router
