# Contact SweetAware

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16 pt-28">
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hubungi <span class="text-blue-600">SweetAware</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Kami siap membantu Anda. Pilih cara yang paling nyaman untuk menghubungi tim kami.
        </p>
      </div>
    </div>

    <!-- Contact Cards Section -->
    <div class="container mx-auto px-4 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Quick Contact Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition duration-300"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="text-center mb-6">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-phone text-2xl text-blue-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Telepon Kami</h3>
            <p class="text-gray-600 dark:text-gray-300">Layanan 24/7</p>
            <a
              href="tel:+6281234567890"
              class="text-blue-600 font-semibold block mt-4 hover:text-blue-800"
            >
              +62 812-3456-7890
            </a>
          </div>
        </div>
        <!-- Email Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="text-center mb-6">
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-envelope text-2xl text-green-600 dark:text-green-400"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
            <p class="text-gray-600 dark:text-gray-300">Respon Cepat</p>
            <a
              href="mailto:support@sweetaware.com"
              class="text-green-600 font-semibold block mt-4 hover:text-green-800"
            >
              support@sweetaware.com
            </a>
          </div>
        </div>
        <!-- Live Chat Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition duration-300"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div class="text-center mb-6">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fas fa-comments text-2xl text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Live Chat</h3>
            <p class="text-gray-600 dark:text-gray-300">Chat Langsung</p>
            <button
              @click="startLiveChat"
              class="text-purple-600 font-semibold block w-full mt-4 hover:text-purple-800"
            >
              Mulai Chat
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Form Section -->
    <div class="container mx-auto px-4 mb-16">
      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Form -->
          <div data-aos="fade-right" data-aos-delay="500">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Kirim Pesan</h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-700 dark:text-gray-300 mb-2">Subjek</label>
                <input
                  type="text"
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label class="block text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          <!-- Map and Info -->
          <div data-aos="fade-left" data-aos-delay="500">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Lokasi Kami</h2>
            <!-- Fake Map Container -->
            <div class="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 mb-6 relative overflow-hidden">
              <img
                src="/src/assets/images/contact.png"
                alt="Office Location"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt text-blue-600 dark:text-blue-400 mt-1 mr-3"></i>
                <p class="text-gray-600 dark:text-gray-300">
                  Jl. Telekomunikasi No. 1, Terusan Buahbatu, Bandung, Jawa Barat 40257
                </p>
              </div>
              <div class="flex items-start">
                <i class="fas fa-clock text-blue-600 dark:text-blue-400 mt-1 mr-3"></i>
                <p class="text-gray-600 dark:text-gray-300">
                  Senin - Jumat: 08.00 - 17.00<br />
                  Sabtu: 09.00 - 15.00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Social Media Section -->
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Ikuti Kami
        </h2>
        <div class="flex justify-center space-x-6">
          <a
            href="#"
            class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition duration-300"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition duration-300"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition duration-300"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition duration-300"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- FAQ Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Pertanyaan Umum
      </h2>
      <div class="max-w-3xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
          <button
            @click="toggleFaq(index)"
            class="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span class="font-semibold text-gray-800 dark:text-white">{{ faq.question }}</span>
            <i
              :class="[
                'fas',
                faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down',
                'text-blue-600 dark:text-blue-400',
              ]"
            ></i>
          </button>
          <div
            v-show="faq.isOpen"
            class="bg-white dark:bg-gray-800 p-4 rounded-b-lg shadow-md mt-1 text-gray-600 dark:text-gray-300"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      faqs: [
        {
          question: 'Bagaimana cara mendaftar di SweetAware?',
          answer:
            'Anda dapat mendaftar dengan mengklik tombol "Daftar" di pojok kanan atas halaman. Isi formulir pendaftaran dengan data yang valid, dan akun Anda akan segera aktif.',
          isOpen: false,
        },
        {
          question: 'Berapa lama waktu respon untuk pertanyaan via email?',
          answer:
            'Kami berusaha merespon semua email dalam waktu 24 jam kerja. Untuk masalah mendesak, kami sarankan menggunakan fitur Live Chat atau menghubungi nomor telepon kami.',
          isOpen: false,
        },
        {
          question: 'Apakah konsultasi diabetes bersifat gratis?',
          answer:
            'Ya, konsultasi dasar melalui platform kami bersifat gratis. Untuk konsultasi mendalam dengan dokter spesialis, mungkin akan dikenakan biaya tambahan.',
          isOpen: false,
        },
        {
          question: 'Bagaimana keamanan data saya dijamin?',
          answer:
            'Kami menggunakan enkripsi end-to-end dan mengikuti standar keamanan data kesehatan internasional untuk melindungi privasi dan data medis Anda.',
          isOpen: false,
        },
      ],
    }
  },
  methods: {
    submitForm() {
      // Implement form submission logic
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
      alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.')
    },
    startLiveChat() {
      // Implement live chat logic
      console.log('Starting live chat')
      alert('Fitur live chat akan segera tersedia!')
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    },
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
