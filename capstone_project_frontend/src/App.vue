<script setup>
import Navbar from './components/layout/Navbar.vue'
import Home from './pages/Home.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>
/* Additional custom styles can go here */
</style>
