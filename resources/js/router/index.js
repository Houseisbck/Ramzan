import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'register',
        meta: {
            layout: 'empty'
        },
        component: () => import('../views/Register.vue')
    },
    {
        path: '/',
        name: '/',
        meta: {
            layout: 'empty'
        },
        component: () => import('../layouts/CoreLayout.vue')
    },
    {
        path: '/mypage',
        name: 'mypage',
        meta:{
            layout: 'core'
        },
        component: ()=>import('../views/MyPage.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router