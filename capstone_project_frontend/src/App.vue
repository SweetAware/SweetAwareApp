<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <!-- Add transition wrapper around router-view -->
    <router-view v-slot="{ Component }">
      <transition
        mode="default"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import gsap from 'gsap'

// Improved page transition animations using GSAP
const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateX(20px)'
  el.style.position = 'absolute'
  el.style.width = '100%'
}

const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.2,
    opacity: 1,
    x: 0,
    position: 'relative',
    ease: 'power1.out',
    onComplete: done,
  })
}

const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.2,
    opacity: 0,
    x: -20,
    ease: 'power1.in',
    onComplete: done,
  })
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Dark mode transition */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Ensure router view container takes full height for smooth transitions */
.router-view-container {
  min-height: 100vh;
  position: relative;
}
</style>
