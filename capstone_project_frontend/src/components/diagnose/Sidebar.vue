<template>
  <div class="bg-[#454B61] text-white h-screen w-72 flex flex-col">
    <!-- User Profile -->
    <div class="p-6 text-center">
      <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
        <img :src="profileImage" alt="User Profile" class="w-full h-full object-cover" />
      </div>
      <h3 class="text-lg font-semibold">{{ userName }}</h3>
      <button class="mt-2 px-4 py-1 bg-black rounded-full text-sm">Log out</button>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 p-6">
      <ul class="space-y-6">
        <li>
          <router-link
            to="/diagnose"
            class="flex items-center space-x-3 text-white hover:text-gray-300"
            :class="{ 'text-white': isActive('diagnose'), 'text-gray-400': !isActive('diagnose') }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>Risk Prediction</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/history"
            class="flex items-center space-x-3 text-white hover:text-gray-300"
            :class="{ 'text-white': isActive('history'), 'text-gray-400': !isActive('history') }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Prediction History</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Having troubles? -->
    <div class="p-6">
      <div class="bg-[#F2E8E9] rounded-xl p-4 text-black">
        <p class="text-sm">Having troubles?</p>
        <a href="#" class="text-sm text-blue-600 hover:underline">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// You can replace this with actual user data from your authentication system
const userName = 'Aprizal Wijamiko'
const profileImage = '/src/assets/images/profil.jpg'

const route = useRoute()
const isActive = (routeName) => route.name === routeName
</script>
