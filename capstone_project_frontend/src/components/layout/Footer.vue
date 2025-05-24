<template>
  <footer class="bg-[#4B5563] text-white">
    <div class="container mx-auto px-4">
      <!-- Main Footer -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="col-span-2">
          <img src="@/assets/images/footer.png" alt="SweetAware Logo" class="h-12 mb-4" />
          <p class="text-gray-300 pr-8 leading-relaxed">
            SweetAware is your trusted companion in diabetes awareness and prevention. We make
            health monitoring accessible, easy, and informative for everyone.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">Contact</a>
            </li>
            <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              support@sweetaware.com
            </li>
            <li class="flex items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              +1 234 567 890
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-600 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">© 2025 SweetAware. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors"
              >Terms of Service</a
            >
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
