//Arquivo responsavel por gerenciar as rotas da aplicação

import Vue from 'vue'
import VueRouter from 'vue-router'
import Works from '../views/Works.vue'
import contato from "../views/Contato.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/contato",
    name: "contato",
    component: contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
