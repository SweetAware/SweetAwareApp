<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white relative dark:shadow-[0_-8px_20px_rgba(255,255,255,0.15)]">
    <!-- Wave SVG -->
    <div
      class="wave-container absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 block dark:hidden"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-full h-[60px]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-white dark:fill-gray-900"
        ></path>
      </svg>
    </div>

    <!-- Newsletter Subscribe -->
    <div class="max-w-7xl mx-auto px-4 relative -top-16">
      <div
        class="glass-effect rounded-xl p-8 border border-gray-500/30 transform hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 class="text-2xl font-semibold mb-2">Stay Connected with SweetAware</h3>
        <p class="text-gray-300 mb-6">
          Subscribe to our newsletter for the latest health tips, articles, and updates.
        </p>
        <form class="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-gray-700/40 backdrop-blur-sm rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-500/30"
          />
          <button
            type="submit"
            class="px-8 py-3 bg-purple-600/90 hover:bg-purple-700 text-white rounded-lg transition-colors backdrop-blur-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="max-w-7xl mx-auto px-4 pt-0 pb-12 grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Logo and Description -->
      <div class="col-span-1">
        <img src="@/assets/images/logo_footer.png" alt="SweetAware Logo" class="h-12 mb-4" />
        <p class="text-gray-400 mb-6">
          Your trusted companion in diabetes awareness and prevention. We make health monitoring
          accessible, easy, and informative for everyone.
        </p>
        <!-- Social Links -->
        <div class="flex space-x-4">
          <a href="#" class="text-purple-500 hover:text-purple-400">
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-400">
            <i class="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-400">
            <i class="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="col-span-1">
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <router-link
              to="/"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              to="/articles"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Articles
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div class="col-span-1">
        <h3 class="text-xl font-semibold mb-4">Services</h3>
        <ul class="space-y-2">
          <li>
            <router-link
              to="/diagnose"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Diabetes Screening
            </router-link>
          </li>
          <li>
            <router-link
              to="/education"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Health Education
            </router-link>
          </li>
          <li>
            <router-link
              to="/history"
              class="text-gray-400 hover:text-purple-500 inline-flex items-center"
            >
              <i class="fas fa-chevron-right mr-2 text-sm"></i>
              Health History
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="col-span-1">
        <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
        <div class="space-y-4">
          <p class="text-gray-400 flex items-center">
            <i class="fas fa-envelope text-purple-500 mr-3"></i>
            support@sweetaware.com
          </p>
          <p class="text-gray-400 flex items-center">
            <i class="fas fa-phone text-purple-500 mr-3"></i>
            +1 234 567 890
          </p>
          <p class="text-gray-400 flex items-start">
            <i class="fas fa-map-marker-alt text-purple-500 mr-3 mt-1"></i>
            <span>123 Health Street<br />Jakarta, Indonesia</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} SweetAware. All rights reserved. Made with ❤️ for better health.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-purple-500">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-purple-500">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-purple-500">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.router-link-active {
  color: theme('colors.purple.500');
}

.glass-effect {
  background: rgba(31, 41, 55, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
}

.wave-container {
  transform: translateY(-1px);
}

.wave-container svg {
  transform: scale(1.1);
}
</style>
