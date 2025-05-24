import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Diagnose from '../pages/Diagnose.vue'
import About from '../pages/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/diagnose',
      name: 'diagnose',
      component: Diagnose,
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../pages/PredictionHistory.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
