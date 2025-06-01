<template>
  <nav class="bg-gray-50 py-4 relative z-50">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="@/assets/images/logo.png" alt="SweetAware Logo" class="h-8" />
      </div>
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="text-gray-700 hover:text-blue-600">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-blue-600">About</router-link>
        <router-link to="/edukasi" class="text-gray-700 hover:text-blue-600">Edukasi</router-link>
        <router-link to="/articles" class="text-gray-700 hover:text-blue-600">Artikel</router-link>
        <router-link to="/contact" class="text-gray-700 hover:text-blue-600">Contact</router-link>
      </div>
      <div class="flex items-center space-x-4">
        <!-- Show Sign In/Sign Up buttons when not logged in -->
        <template v-if="!isLoggedIn">
          <router-link
            to="/signin"
            class="px-4 py-2 text-gray-700 hover:text-blue-600 transition duration-300"
            :class="{ 'border border-black rounded-full': $route.path === '/signin' }"
          >
            Sign In
          </router-link>
          <router-link
            to="/signup"
            class="px-4 py-2 text-black hover:bg-black hover:text-white transition duration-300"
            :class="{ 'border border-black rounded-full': $route.path === '/signup' }"
          >
            Sign Up
          </router-link>
        </template>

        <router-link
          to="/diagnose"
          class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 inline-block"
        >
          Diagnose
        </router-link>

        <!-- Profile dropdown when logged in -->
        <div v-if="isLoggedIn" class="relative ml-3">
          <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="flex items-center bg-gray-200 rounded-full p-1 hover:bg-gray-300 focus:outline-none"
          >
            <span v-if="user?.profileImage">
              <img :src="user.profileImage" alt="Profile" class="h-8 w-8 rounded-full" />
            </span>
            <span
              v-else
              class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600"
            >
              👤
            </span>
          </button>

          <!-- Dropdown menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
          >
            <router-link
              to="/dashboard"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="isDropdownOpen = false"
            >
              Dashboard
            </router-link>
            <router-link
              to="/history"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="isDropdownOpen = false"
            >
              History Pemeriksaan
            </router-link>
            <router-link
              to="/profile"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="isDropdownOpen = false"
            >
              Profil
            </router-link>
            <button
              @click="handleLogout"
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = useRouter()
const isDropdownOpen = ref(false)
const { user, isLoggedIn, logout } = useAuth()

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (isDropdownOpen.value && !event.target.closest('.relative')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Handle logout
const handleLogout = () => {
  logout()
  isDropdownOpen.value = false
  router.push('/')
}
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
