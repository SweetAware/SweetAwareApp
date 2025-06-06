<template>
  <div class="w-64 bg-[#2C3E50] fixed h-full pt-16 text-white flex flex-col">
    <div class="p-4 flex-1">
      <!-- User Profile -->
      <div class="flex flex-col items-center mb-8 pt-4">
        <div class="w-20 h-20 rounded-full bg-gray-300 mb-3 overflow-hidden">
          <img src="@/assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-lg font-medium">{{ username }}</h3>
        <button
          @click="handleLogout"
          class="mt-2 px-4 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600"
        >
          Log out
        </button>
      </div>

      <!-- Navigation Items -->
      <nav class="space-y-2">
        <router-link
          to="/diagnose"
          class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700"
          :class="{ 'bg-gray-700': $route.path === '/diagnose' }"
        >
          <i class="fas fa-heart-pulse"></i>
          <span>Risk Prediction</span>
        </router-link>
        <router-link
          to="/history"
          class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700"
          :class="{ 'bg-gray-700': $route.path === '/history' }"
        >
          <i class="fas fa-clock-rotate-left"></i>
          <span>Prediction History</span>
        </router-link>
      </nav>
    </div>

    <!-- Having Troubles Section -->
    <div class="p-4 bg-[#faf5f7] text-gray-800 rounded-lg mx-4 mb-4">
      <p class="text-sm font-medium mb-1">Having troubles?</p>
      <router-link to="/contact" class="text-blue-600 hover:text-blue-700 text-sm"
        >Contact Us</router-link
      >
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { AuthModel } from '@/models/AuthModel'
import eventBus from '@/utils/eventBus'

export default {
  name: 'Sidebar',
  setup() {
    const router = useRouter()
    const authModel = new AuthModel()
    const username = ref('')

    onMounted(() => {
      updateUsername()
      // Listen for auth state changes
      eventBus.on('auth-state-changed', () => {
        updateUsername()
      })
    })

    const updateUsername = () => {
      const userStr = localStorage.getItem('user')
      if (userStr) {
        const user = JSON.parse(userStr)
        username.value = user.username
      }
    }

    const handleLogout = () => {
      authModel.logout()
      eventBus.emit('auth-state-changed', false)
      router.push('/login')
    }

    return {
      username,
      handleLogout,
    }
  },
}
</script>
