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
          Create your account ✨
        </h2>
        <p class="mt-4 text-center text-sm text-gray-600 dark:text-white">
          Already have an account?
          <router-link
            to="/login"
            class="font-medium text-purple-600 hover:text-purple-500 hover:underline transition-colors duration-200"
          >
            Sign in here
          </router-link>
        </p>
      </div>

      <form class="mt-12 space-y-8" @submit.prevent="handleRegister">
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
          <!-- Username Input -->
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 dark:text-white mb-2"
              >Username</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-user text-gray-400"></i>
              </div>
              <input
                id="username"
                v-model="username"
                name="username"
                type="text"
                required
                class="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Enter your username"
                :disabled="loading"
              />
            </div>
          </div>

          <!-- Email Input -->
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

          <!-- Password Input -->
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
                placeholder="Create a strong password"
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

          <!-- Confirm Password Input -->
          <div>
            <label
              for="confirm-password"
              class="block text-sm font-medium text-gray-700 dark:text-white mb-2"
              >Confirm password</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-lock text-gray-400"></i>
              </div>
              <input
                id="confirm-password"
                v-model="confirmPassword"
                name="confirm-password"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Confirm your password"
                :disabled="loading"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <i
                  :class="[
                    'fas',
                    showConfirmPassword ? 'fa-eye-slash' : 'fa-eye',
                    'text-gray-400 hover:text-gray-600',
                  ]"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="agree-terms"
            v-model="agreeToTerms"
            name="agree-terms"
            type="checkbox"
            required
            class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition duration-150 ease-in-out"
          />
          <label for="agree-terms" class="ml-2 block text-sm text-gray-700 dark:text-white">
            I agree to the
            <a href="#" class="text-purple-600 hover:text-purple-500 hover:underline"
              >Terms of Service</a
            >
            and
            <a href="#" class="text-purple-600 hover:text-purple-500 hover:underline"
              >Privacy Policy</a
            >
          </label>
        </div>

        <div class="mt-8">
          <button
            type="submit"
            :disabled="loading || !isFormValid"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition duration-150 hover:scale-105"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i
                v-if="!loading"
                class="fas fa-user-plus text-purple-300 group-hover:text-purple-200"
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
            {{ loading ? 'Creating account...' : 'Create account' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { RegisterPresenter } from '@/presenters/RegisterPresenter'
import Swal from 'sweetalert2'
import eventBus from '@/utils/eventBus'

export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
      loading: false,
      showPassword: false,
      showConfirmPassword: false,
      error: null,
      presenter: null,
    }
  },
  computed: {
    isFormValid() {
      return (
        this.username &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.password === this.confirmPassword &&
        this.agreeToTerms
      )
    },
  },
  created() {
    this.presenter = new RegisterPresenter(this)
  },
  methods: {
    async handleRegister() {
      if (!this.isFormValid) return

      if (this.loading) return

      this.error = null
      await this.presenter.handleRegister(this.username, this.email, this.password)
    },
    // View interface methods
    setLoading(isLoading) {
      this.loading = isLoading
    },
    onRegisterSuccess(data) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Please login with your new account',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        this.$router.push('/login')
      })
    },
    onRegisterError(errorMessage) {
      this.error = errorMessage
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: errorMessage,
      })
    },
  },
}
</script>
