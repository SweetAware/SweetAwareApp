<template>
  <div
    class="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
  >
    <div
      class="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 space-y-8 transform hover:scale-105 transition-all duration-300"
    >
      <div class="text-center">
        <img
          class="mx-auto h-20 w-auto transform hover:rotate-6 transition-transform duration-300 block dark:hidden"
          src="@/assets/images/logo_nav.png"
          alt="Sweet Aware Logo"
        />
        <img
          class="mx-auto h-20 w-auto transform hover:rotate-6 transition-transform duration-300 hidden dark:block"
          src="@/assets/images/logo_footer.png"
          alt="Sweet Aware Logo"
        />
        <h2 class="mt-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome Back! 👋
        </h2>
        <p class="mt-4 text-center text-sm text-gray-600 dark:text-white">
          Don't have an account yet?
          <router-link
            to="/register"
            class="font-medium text-purple-600 hover:text-purple-500 hover:underline transition-colors duration-200"
          >
            Create a new account
          </router-link>
        </p>
      </div>
      <form class="mt-12 space-y-8" @submit.prevent="handleLogin">
        <div v-if="error" class="bg-red-50 border-l-4 border-red-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <i class="fas fa-exclamation-circle text-red-500"></i>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">{{ error }}</p>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white mb-2"
              >Email address</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                required
                class="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Enter your email"
                :disabled="loading"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-white mb-2"
              >Password</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-lock text-gray-400"></i>
              </div>
              <input
                id="password"
                v-model="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Enter your password"
                :disabled="loading"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <i
                  :class="[
                    'fas',
                    showPassword ? 'fa-eye-slash' : 'fa-eye',
                    'text-gray-400 hover:text-gray-600',
                  ]"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="rememberMe"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition duration-150 ease-in-out"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-white">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-purple-600 hover:text-purple-500 hover:underline transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div class="mt-8">
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition duration-150 hover:scale-105"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i
                v-if="!loading"
                class="fas fa-sign-in-alt text-purple-300 group-hover:text-purple-200"
              ></i>
              <svg
                v-else
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {{ loading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LoginPresenter } from '@/presenters/LoginPresenter'
import Swal from 'sweetalert2'
import eventBus from '@/utils/eventBus'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      loading: false,
      showPassword: false,
      error: null,
      presenter: null,
    }
  },
  created() {
    this.presenter = new LoginPresenter(this)
    // Check if user was remembered
    if (localStorage.getItem('rememberMe') === 'true') {
      this.rememberMe = true
      const storedEmail = localStorage.getItem('rememberedEmail')
      if (storedEmail) {
        this.email = storedEmail
      }
    }
  },
  methods: {
    async handleLogin() {
      if (!this.email || !this.password) {
        return
      }

      if (this.loading) {
        return
      }

      this.error = null
      await this.presenter.handleLogin(this.email, this.password, this.rememberMe)
    },
    // View interface methods
    setLoading(isLoading) {
      this.loading = isLoading
    },
    onLoginSuccess(data) {
      // If remember me is checked, save the email
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email)
      } else {
        localStorage.removeItem('rememberedEmail')
      }

      // Emit auth state change event
      eventBus.emit('auth-state-changed', true)

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Welcome back!',
        text: 'Login successful',
        timer: 1500,
        showConfirmButton: false,
      })

      // After successful login, redirect to home
      this.$router.push('/')
    },
    onLoginError(errorMessage) {
      this.error = errorMessage
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: errorMessage,
      })
    },
  },
}
</script>
