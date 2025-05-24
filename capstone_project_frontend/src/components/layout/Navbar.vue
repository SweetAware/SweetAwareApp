<template>
  <nav class="bg-gray-50 py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="@/assets/images/logo.png" alt="SweetAware Logo" class="h-8" />
      </div>
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-blue-600">About</router-link>
        <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
      </div>
      <div>
        <router-link
          to="/diagnose"
          class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 inline-block"
        >
          Diagnose
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
