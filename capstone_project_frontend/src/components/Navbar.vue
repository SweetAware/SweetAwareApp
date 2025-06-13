<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Mobile Menu Button - Now on the left -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none mr-2"
          >
            <span class="sr-only">Open main menu</span>
            <i :class="['fas', isMobileMenuOpen ? 'fa-times' : 'fa-bars']"></i>
          </button>

          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center">
              <img class="h-8 w-auto" :src="isDarkMode ? logoFooter : logoNav" alt="SweetAware" />
            </router-link>
          </div>
        </div>

        <!-- Center Navigation - Desktop -->
        <div class="hidden md:flex flex-1 justify-center items-center space-x-8">
          <router-link
            to="/"
            exact
            class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            active-class="!text-purple-600 dark:!text-purple-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            active-class="!text-purple-600 dark:!text-purple-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400"
            >About</router-link
          >
          <router-link
            to="/education"
            class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            active-class="!text-purple-600 dark:!text-purple-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400"
            >Education</router-link
          >
          <router-link
            to="/articles"
            class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            active-class="!text-purple-600 dark:!text-purple-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400"
            >Articles</router-link
          >
          <router-link
            to="/contact"
            class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            active-class="!text-purple-600 dark:!text-purple-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400"
            >Contact</router-link
          >
        </div>

        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Desktop Actions -->
          <div class="hidden md:flex items-center space-x-4">
            <button
              @click="toggleDarkMode"
              class="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <i :class="['fas', isDarkMode ? 'fa-sun' : 'fa-moon']"></i>
            </button>

            <template v-if="!isAuthenticated">
              <router-link
                to="/login"
                class="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
              >
                Sign In
              </router-link>
              <router-link
                to="/register"
                class="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
              >
                Sign Up
              </router-link>
            </template>

            <!-- Notification Button for Desktop -->
            <button
              v-if="isAuthenticated"
              @click="toggleNotifications"
              class="hidden md:block relative p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <i :class="['fas', isSubscribed ? 'fa-bell' : 'fa-bell-slash']"></i>
              <span
                v-if="notificationCount > 0"
                class="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full"
              >
                {{ notificationCount }}
              </span>
            </button>

            <router-link
              to="/diagnose"
              class="hidden md:inline-flex items-center px-6 py-2 text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
            >
              Diagnose Now
            </router-link>
          </div>

          <!-- Combined Profile Section (Desktop & Mobile) -->
          <div v-if="isAuthenticated" class="flex items-center">
            <!-- Notification Button for Mobile -->
            <button
              v-if="isAuthenticated"
              @click="toggleNotifications"
              class="md:hidden relative p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 mr-2"
            >
              <i :class="['fas', isSubscribed ? 'fa-bell' : 'fa-bell-slash']"></i>
              <span
                v-if="notificationCount > 0"
                class="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full"
              >
                {{ notificationCount }}
              </span>
            </button>

            <!-- Combined Profile Button -->
            <div class="relative">
              <button
                @click="toggleDropdown"
                class="p-2 text-gray-600 dark:text-gray-300 flex items-center profile-button"
              >
                <img
                  :src="profileImage"
                  alt="Profile"
                  class="w-8 h-8 rounded-full object-cover border-2 border-purple-200 dark:border-purple-700"
                />
              </button>
              <!-- Dropdown Menu -->
              <div
                v-if="isDropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 dropdown-menu"
              >
                <router-link
                  to="/dashboard"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900"
                  @click="isDropdownOpen = false"
                >
                  <i class="fas fa-gauge-high mr-2"></i>Dashboard
                </router-link>
                <router-link
                  to="/history"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900"
                  @click="isDropdownOpen = false"
                >
                  <i class="fas fa-clock-rotate-left mr-2"></i>Prediction History
                </router-link>
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900"
                  @click="isDropdownOpen = false"
                >
                  <i class="fas fa-user mr-2"></i>Profile
                </router-link>
                <button
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                >
                  <i class="fas fa-sign-out-alt mr-2"></i>Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700"
      >
        <!-- Dark Mode Toggle for Mobile -->
        <div class="px-2 pt-2 pb-1">
          <button
            @click="toggleDarkMode"
            class="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
          >
            <i :class="['fas mr-2', isDarkMode ? 'fa-sun' : 'fa-moon']"></i>
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>

        <div class="px-2 pt-2 pb-3 space-y-1 border-t dark:border-gray-700">
          <router-link
            to="/"
            exact
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            active-class="!text-purple-600 dark:!text-purple-400 bg-purple-50 dark:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            active-class="!text-purple-600 dark:!text-purple-400 bg-purple-50 dark:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >About</router-link
          >
          <router-link
            to="/education"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            active-class="!text-purple-600 dark:!text-purple-400 bg-purple-50 dark:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Education</router-link
          >
          <router-link
            to="/articles"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            active-class="!text-purple-600 dark:!text-purple-400 bg-purple-50 dark:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Articles</router-link
          >
          <router-link
            to="/contact"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            active-class="!text-purple-600 dark:!text-purple-400 bg-purple-50 dark:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Contact</router-link
          >
        </div>

        <!-- Mobile Authentication Buttons -->
        <div v-if="!isAuthenticated" class="px-2 pt-2 pb-3 space-y-1 border-t dark:border-gray-700">
          <router-link
            to="/login"
            class="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Sign In</router-link
          >
          <router-link
            to="/register"
            class="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900"
            @click="isMobileMenuOpen = false"
            >Sign Up</router-link
          >
        </div>

        <!-- Mobile Diagnose Button -->
        <div class="px-2 pt-2 pb-3 border-t dark:border-gray-700">
          <router-link
            to="/diagnose"
            class="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
            @click="isMobileMenuOpen = false"
            >Diagnose Now</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useDarkModeStore } from '@/stores/darkMode'
import { storeToRefs } from 'pinia'
import { AuthModel } from '@/models/AuthModel'
import { NotificationService } from '@/services/NotificationService'
import eventBus from '@/utils/eventBus'
import Swal from 'sweetalert2'
import logoNav from '@/assets/images/logo_nav.png'
import logoFooter from '@/assets/images/logo_footer.png'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const darkModeStore = useDarkModeStore()
    const { isDarkMode } = storeToRefs(darkModeStore)
    const { toggleDarkMode } = darkModeStore

    return {
      isDarkMode,
      toggleDarkMode,
      logoNav,
      logoFooter,
    }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isAuthenticated: false,
      isDropdownOpen: false,
      profileImage: '/src/assets/images/profile.jpg',
      notificationCount: 0,
      isSubscribed: false,
      notificationService: new NotificationService(),
    }
  },
  async created() {
    // Check initial auth state
    const authModel = new AuthModel()
    this.isAuthenticated = authModel.isLoggedIn()

    // Listen for auth state changes
    eventBus.on('auth-state-changed', async (isAuthenticated) => {
      this.isAuthenticated = isAuthenticated
      if (isAuthenticated) {
        await this.checkNotificationStatus()
      }
    })

    // Initialize notification status if authenticated
    if (this.isAuthenticated) {
      await this.checkNotificationStatus()
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    showError(message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
      })
    },
    showSuccess(message) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        timer: 1500,
        showConfirmButton: false,
      })
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    handleClickOutside(event) {
      const profileButton = this.$el.querySelector('.profile-button')
      const dropdown = this.$el.querySelector('.dropdown-menu')
      if (
        this.isDropdownOpen &&
        profileButton &&
        dropdown &&
        !profileButton.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        this.isDropdownOpen = false
      }
    },
    async checkNotificationStatus() {
      try {
        this.isSubscribed = await this.notificationService.checkSubscription()
      } catch (error) {
        console.error('Error checking notification status:', error)
      }
    },
    async toggleNotifications() {
      if (!this.isAuthenticated) {
        this.showError('Please login to manage notifications')
        return
      }

      try {
        const token = localStorage.getItem('token')
        if (!token) {
          this.showError('Authorization token not found. Please log in again.')
          return
        }

        // Check if service worker is supported
        if (!('serviceWorker' in navigator)) {
          this.showError('Push notifications are not supported in your browser.')
          return
        }

        // Handle subscription toggle
        if (this.isSubscribed) {
          await this.notificationService.unsubscribeFromPushNotifications(token)
          this.showSuccess('Successfully unsubscribed from notifications')
          this.isSubscribed = false
        } else {
          // Check notification permission first
          if (Notification.permission === 'denied') {
            this.showError(
              'Notifications are blocked. Please enable them in your browser settings by clicking the lock icon in the address bar.',
            )
            return
          }

          // If permission not granted yet, request it
          if (Notification.permission === 'default') {
            const permission = await Notification.requestPermission()
            if (permission !== 'granted') {
              this.showError('Please allow notifications to enable this feature.')
              return
            }
          }

          // Subscribe to notifications
          await this.notificationService.subscribeToPushNotifications(token)
          this.showSuccess('Successfully subscribed to notifications')
          this.isSubscribed = true
        }
      } catch (error) {
        console.error('Failed to toggle notifications:', error)
        this.showError(
          error.message || 'Failed to manage notification subscription. Please try again.',
        )
      }
    },
    handleLogout() {
      const authModel = new AuthModel()
      authModel.logout()
      this.isDropdownOpen = false
      eventBus.emit('auth-state-changed', false)
      this.$router.push('/login')
    },
  },
})
</script>

<style scoped>
/* Add any additional component-specific styles here if needed */
</style>
