<!-- # SweetAware - About Us -->

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16 pt-28">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="flex-1 space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Making Diabetes Management
            <span class="text-blue-600">Simple and Smart</span>
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed">
            SweetAware adalah platform inovatif yang menggabungkan teknologi AI dengan kepedulian
            terhadap kesehatan untuk membantu Anda mengelola diabetes dengan lebih baik.
          </p>
          <div class="flex gap-4">
            <a
              href="#mission"
              class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Pelajari Lebih Lanjut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 00-1 1v4L5.707 9.707a1 1 0 00.707 1.707H9v4a1 1 0 102 0v-4h2.586a1 1 0 00.707-1.707L11 8V4a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Hubungi Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/src/assets/images/illustration.png"
            alt="SweetAware Illustration"
            class="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
    <!-- Mission Section -->
    <div id="mission" class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Misi Kami
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Deteksi Dini</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Membantu mendeteksi risiko diabetes sejak dini melalui teknologi AI yang canggih dan
              akurat.
            </p>
          </div>
          <div
            class="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Edukasi</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Menyediakan informasi dan artikel terkini tentang diabetes dan gaya hidup sehat.
            </p>
          </div>

          <div
            class="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Komunitas</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Membangun komunitas yang saling mendukung dalam perjalanan mengelola diabetes.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Team Section -->
    <div class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Tim Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="relative w-48 h-48 mx-auto mb-4">
              <img
                src="/src/assets/images/profile.jpg"
                alt="Team Member"
                class="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
              <div class="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
            <p class="text-gray-600 dark:text-gray-300">Lead Developer</p>
          </div>
          <!-- Add more team members similarly -->
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Hubungi Kami
          </h2>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Informasi Kontak
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-800 dark:text-white">Jl. Contoh No. 123</p>
                      <p class="text-gray-600 dark:text-gray-300">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-800 dark:text-white">Email</p>
                      <p class="text-gray-600 dark:text-gray-300">info@sweetaware.com</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-800 dark:text-white">Telepon</p>
                      <p class="text-gray-600 dark:text-gray-300">+62 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form @submit.prevent="submitForm" class="space-y-4">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Nama</label
                    >
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Pesan</label
                    >
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        message: '',
      }
      // Show success message
      alert('Terima kasih! Pesan Anda telah terkirim.')
    },
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
