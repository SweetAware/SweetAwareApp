<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl font-bold text-gray-900">Hubungi Kami</h1>
          <p class="text-lg text-gray-600">
            Ada pertanyaan atau saran? Jangan ragu untuk menghubungi tim SweetAware. Kami siap
            membantu Anda.
          </p>

          <!-- Contact Information -->
          <div class="space-y-4 mt-8">
            <div class="flex items-center space-x-4">
              <div class="bg-blue-100 p-3 rounded-full">
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
              <div>
                <h3 class="font-semibold">Email</h3>
                <p class="text-gray-600">support@sweetaware.com</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="bg-green-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-600"
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
              <div>
                <h3 class="font-semibold">Telepon</h3>
                <p class="text-gray-600">+62 821-2345-6789</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="bg-purple-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-purple-600"
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
              <div>
                <h3 class="font-semibold">Lokasi</h3>
                <p class="text-gray-600">Jl. Teknik Kimia, Keputih, Sukolilo, Surabaya</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subjek</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = async () => {
  // Here you can implement the logic to send the form data
  console.log('Form submitted:', form)
  // Reset form after submission
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  alert('Terima kasih! Pesan Anda telah terkirim.')
}
</script>
