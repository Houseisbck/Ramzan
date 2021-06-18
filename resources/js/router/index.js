import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'register',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Register.vue')
    },
    {
        path: '/login',
        name: '/login',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/page/:id',
        name: 'page',
        meta: {
            layout: 'core'
        },
        component: () => import('../views/MyPage.vue')
    },
    {
        path: '*',
        name: 'mypage',
        meta: {
            layout: 'core'
        },
        component: () => import('../views/404.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
