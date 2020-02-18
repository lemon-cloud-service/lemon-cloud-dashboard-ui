import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/Mian.vue'
import Login from '@/views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
