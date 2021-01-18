import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Home from '@/views/Home'
import OAuthCallback from '@/views/OAuthCallback'
import Upload from '@/views/Upload'
import Favorites from '@/views/Favorites'
import E404 from '@/views/htmlErrors/404'
import E500 from '@/views/htmlErrors/500'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/callback',
            name: 'OAuth Callback',
            component: OAuthCallback,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/upload',
            name: 'Upload',
            component: Upload,
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: Favorites,
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
