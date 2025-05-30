<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-white">
      <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl font-bold text-gray-900">Pelajari Tentang Diabetes</h1>
            <p class="text-lg text-gray-600">
              Tingkatkan pemahaman Anda tentang diabetes melalui informasi terpercaya dan terkini.
              Bersama SweetAware, mari kelola kesehatan dengan lebih baik.
            </p>
            <div class="flex space-x-4">
              <a
                href="#categories"
                class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 inline-block"
              >
                Mulai Belajar
              </a>
              <a
                href="#faq"
                class="border border-black px-6 py-3 rounded-full hover:bg-gray-100 inline-block"
              >
                FAQ Diabetes
              </a>
            </div>
          </div>
          <div class="relative">
            <img src="@/assets/images/education-hero.svg" alt="Education Hero" class="w-full" />
          </div>
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <div id="categories" class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Topik Pembelajaran</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Understanding Diabetes -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl">🔬</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Memahami Diabetes</h3>
            <p class="text-gray-600 mb-4">
              Pelajari tentang apa itu diabetes, jenis-jenisnya, gejala, dan bagaimana kondisi ini
              mempengaruhi tubuh Anda.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Tipe-tipe Diabetes
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Gejala dan Tanda
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Faktor Risiko
              </li>
            </ul>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Pelajari lebih lanjut
              <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Prevention -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl">🥗</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Pencegahan Diabetes</h3>
            <p class="text-gray-600 mb-4">
              Temukan cara-cara efektif untuk mencegah atau menunda onset diabetes melalui perubahan
              gaya hidup.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Pola Makan Sehat
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Aktivitas Fisik
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Manajemen Stres
              </li>
            </ul>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Pelajari lebih lanjut
              <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Management -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span class="text-2xl">📊</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Manajemen Diabetes</h3>
            <p class="text-gray-600 mb-4">
              Panduan praktis untuk mengelola diabetes dan menjaga kualitas hidup sehari-hari.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Monitoring Gula Darah
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Pengobatan
              </li>
              <li class="flex items-center text-gray-600">
                <svg
                  class="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Gaya Hidup Sehat
              </li>
            </ul>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              Pelajari lebih lanjut
              <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div id="faq" class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
        <div class="max-w-3xl mx-auto space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg">
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span class="font-medium">{{ faq.question }}</span>
              <svg
                class="w-5 h-5 transform transition-transform"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-show="faq.isOpen" class="px-6 py-4 border-t">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="container mx-auto px-4 py-16">
      <div class="bg-blue-50 rounded-3xl p-8 md:p-12 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Mulai Perjalanan Sehat Anda</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Deteksi dini adalah langkah pertama untuk mengelola diabetes. Gunakan fitur diagnosa kami
          untuk mengetahui risiko diabetes Anda.
        </p>
        <router-link
          to="/diagnose"
          class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 inline-block"
        >
          Mulai Diagnosa
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Apa itu diabetes?',
    answer:
      'Diabetes adalah kondisi kronis yang terjadi ketika tubuh tidak dapat menghasilkan insulin yang cukup atau tidak dapat menggunakan insulin secara efektif. Insulin adalah hormon yang mengatur kadar gula darah.',
    isOpen: false,
  },
  {
    question: 'Apa saja gejala umum diabetes?',
    answer:
      'Gejala umum diabetes meliputi sering merasa haus, sering buang air kecil, lapar berlebihan, penurunan berat badan tanpa sebab, kelelahan, penglihatan kabur, dan luka yang lama sembuh.',
    isOpen: false,
  },
  {
    question: 'Bagaimana cara mencegah diabetes?',
    answer:
      'Diabetes dapat dicegah atau ditunda dengan menerapkan gaya hidup sehat, termasuk menjaga pola makan seimbang, melakukan aktivitas fisik secara teratur, menjaga berat badan ideal, dan mengelola stres dengan baik.',
    isOpen: false,
  },
  {
    question: 'Apakah diabetes dapat disembuhkan?',
    answer:
      'Saat ini diabetes tidak dapat disembuhkan sepenuhnya, tetapi dapat dikelola dengan baik melalui pengobatan, pola makan sehat, olahraga teratur, dan pemantauan gula darah rutin.',
    isOpen: false,
  },
  {
    question: 'Seberapa sering harus mengecek gula darah?',
    answer:
      'Frekuensi pengecekan gula darah bervariasi tergantung tipe diabetes dan rekomendasi dokter. Umumnya, penderita diabetes tipe 1 perlu mengecek 4-10 kali sehari, sedangkan tipe 2 mungkin cukup 1-2 kali sehari.',
    isOpen: false,
  },
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
