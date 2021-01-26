import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/About'
import Portfolio from '@/views/Portfolio'
import Contact from '@/views/Contact'
import E404 from '@/views/htmlErrors/404'
import E500 from '@/views/htmlErrors/500'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/about',
        },
        {
            path: '/about',
            name: 'À Propos',
            component: About,
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio,
        },
        {
            path: '/contact',
            name: 'Nous Contacter',
            component: Contact,
        },
        {
            path: '',
            name: 'Error500',
            component: E500,
        },
        {
            path: '*',
            name: 'Error404',
            component: E404,
        },
    ],
})

export default router
