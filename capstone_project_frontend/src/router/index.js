import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Diagnose from '../pages/Diagnose.vue'
import About from '../pages/About.vue'
import Edukasi from '../pages/Edukasi.vue'
import SignIn from '../pages/SignIn.vue'
import SignUp from '../pages/SignUp.vue'
import Contact from '../pages/Contact.vue'

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
    {
      path: '/edukasi',
      name: 'edukasi',
      component: Edukasi,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
