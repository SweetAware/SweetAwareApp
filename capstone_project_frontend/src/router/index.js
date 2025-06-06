import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Diagnose from '@/views/Diagnose.vue'
import PredictionHistory from '@/views/PredictionHistory.vue'
import LoginForm from '@/views/auth/LoginForm.vue'
import RegisterForm from '@/views/auth/RegisterForm.vue'
import Articles from '@/views/Articles.vue'
import About from '@/views/About.vue'
import Education from '@/views/Education.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/diagnose',
    name: 'Diagnose',
    component: Diagnose,
  },
  {
    path: '/history',
    name: 'PredictionHistory',
    component: PredictionHistory,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
  {
    path: '/artikel',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/tentang',
    name: 'About',
    component: About,
  },
  {
    path: '/edukasi',
    name: 'Education',
    component: Education,
  },
  {
    path: '/kontak',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
