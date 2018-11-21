import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue';
import Agencies from '@/views/Agencies/Agencies.vue';
import InHouse from '@/views/InHouse/InHouse.vue';
import Features from '@/views/Features/Features.vue';
import Join from '@/views/Join/Join.vue';
import Blog from '@/views/Blog/Blog.vue';
import More from '@/views/More/More.vue';
import Login from '@/views/Login/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agencies',
      name: 'Agencies',
      component: Agencies
    },
    {
      path: '/in-house',
      name: 'inHouse',
      component: InHouse
    },

    // {
    //   path: '/features/',
    //   name: 'Features',
    //   component: Features
    // },

    {
      path: '/join',
      name: 'Join',
      component: Join
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})