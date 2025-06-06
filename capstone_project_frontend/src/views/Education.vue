# Edukasi Diabetes - SweetAware

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16 pt-28">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Pusat Edukasi <span class="text-blue-600">Diabetes</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Pelajari semua yang Anda butuhkan tentang diabetes, pengelolaan, dan gaya hidup sehat
          melalui konten-konten edukatif kami.
        </p>
      </div>
    </div>
    <!-- Search and Filter Section -->
    <div class="container mx-auto px-4 mb-12">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Cari artikel atau topik..."
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>
          <div class="flex gap-2">
            <select
              v-model="selectedCategory"
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">Semua Kategori</option>
              <option value="basics">Dasar Diabetes</option>
              <option value="lifestyle">Gaya Hidup</option>
              <option value="nutrition">Nutrisi</option>
              <option value="treatment">Pengobatan</option>
            </select>
            <button
              @click="filterContent"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured Articles Section -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Artikel Pilihan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="article in featuredArticles"
          :key="article.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <span
                :class="['px-3 py-1 rounded-full text-sm font-semibold', article.categoryColor]"
                >{{ article.category }}</span
              >
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {{ article.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ article.excerpt }}</p>
            <button
              @click="readArticle(article)"
              class="text-blue-600 font-semibold hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300"
            >
              Baca Selengkapnya →
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Interactive Learning Modules -->
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Modul Pembelajaran Interaktif
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="module in learningModules"
            :key="module.id"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition duration-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              :class="module.iconBg"
            >
              <i :class="['fas', module.icon, 'text-2xl text-white']"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {{ module.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ module.description }}</p>
            <button
              @click="startModule(module)"
              class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Mulai Belajar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Quick Tips Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Tips Cepat Harian</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="tip in dailyTips"
          :key="tip.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4"
          :class="tip.borderColor"
        >
          <div class="flex items-start">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center"
              :class="tip.iconBg"
            >
              <i :class="['fas', tip.icon, 'text-white']"></i>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {{ tip.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">{{ tip.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Video Learning Section -->
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Video Pembelajaran</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="video in educationalVideos"
            :key="video.id"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div class="relative">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-48 object-cover" />
              <div
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300"
              >
                <button
                  @click="playVideo(video)"
                  class="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                >
                  <i class="fas fa-play text-blue-600"></i>
                </button>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {{ video.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ video.description }}</p>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <i class="fas fa-clock mr-2"></i>
                <span>{{ video.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Education',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      featuredArticles: [
        {
          id: 1,
          title: 'Mengenal Diabetes Tipe 2',
          category: 'Dasar Diabetes',
          categoryColor: 'bg-blue-100 text-blue-800',
          image: '/src/assets/images/illustration.png',
          excerpt: 'Pelajari tentang penyebab, gejala, dan cara mengelola diabetes tipe 2.',
        },
        {
          id: 2,
          title: 'Panduan Pola Makan Sehat',
          category: 'Nutrisi',
          categoryColor: 'bg-green-100 text-green-800',
          image: '/src/assets/images/how-to.png',
          excerpt: 'Tips mengatur pola makan yang sehat untuk penderita diabetes.',
        },
        {
          id: 3,
          title: 'Olahraga untuk Diabetesi',
          category: 'Gaya Hidup',
          categoryColor: 'bg-purple-100 text-purple-800',
          image: '/src/assets/images/how-to-02.png',
          excerpt: 'Rekomendasi jenis olahraga yang aman untuk penderita diabetes.',
        },
      ],
      learningModules: [
        {
          id: 1,
          title: 'Dasar-dasar Diabetes',
          description: 'Pelajari konsep dasar tentang diabetes',
          icon: 'fa-book-medical',
          iconBg: 'bg-blue-600',
        },
        {
          id: 2,
          title: 'Manajemen Makanan',
          description: 'Panduan lengkap nutrisi diabetesi',
          icon: 'fa-utensils',
          iconBg: 'bg-green-600',
        },
        {
          id: 3,
          title: 'Aktivitas Fisik',
          description: 'Program olahraga yang tepat',
          icon: 'fa-running',
          iconBg: 'bg-purple-600',
        },
        {
          id: 4,
          title: 'Monitor Gula Darah',
          description: 'Cara mengecek gula darah',
          icon: 'fa-chart-line',
          iconBg: 'bg-red-600',
        },
      ],
      dailyTips: [
        {
          id: 1,
          title: 'Cek Gula Darah',
          content: 'Periksa gula darah secara rutin setiap pagi.',
          icon: 'fa-droplet',
          iconBg: 'bg-blue-600',
          borderColor: 'border-blue-600',
        },
        {
          id: 2,
          title: 'Porsi Makan',
          content: 'Gunakan metode piring untuk mengatur porsi makan.',
          icon: 'fa-plate-wheat',
          iconBg: 'bg-green-600',
          borderColor: 'border-green-600',
        },
        {
          id: 3,
          title: 'Aktivitas Fisik',
          content: 'Lakukan jalan kaki 30 menit setiap hari.',
          icon: 'fa-person-walking',
          iconBg: 'bg-purple-600',
          borderColor: 'border-purple-600',
        },
      ],
      educationalVideos: [
        {
          id: 1,
          title: 'Pengenalan Diabetes',
          description: 'Video penjelasan lengkap tentang diabetes.',
          thumbnail: '/src/assets/images/how-to-03.png',
          duration: '10:30',
        },
        {
          id: 2,
          title: 'Tutorial Cek Gula Darah',
          description: 'Cara menggunakan alat cek gula darah.',
          thumbnail: '/src/assets/images/how-to-02.png',
          duration: '05:45',
        },
        {
          id: 3,
          title: 'Menu Sehat Diabetesi',
          description: 'Resep makanan sehat untuk diabetesi.',
          thumbnail: '/src/assets/images/how-to.png',
          duration: '15:20',
        },
      ],
    }
  },
  methods: {
    filterContent() {
      // Implement filter logic
      console.log('Filtering content with:', this.searchQuery, this.selectedCategory)
    },
    readArticle(article) {
      // Implement article reading logic
      console.log('Reading article:', article.title)
    },
    startModule(module) {
      // Implement module start logic
      console.log('Starting module:', module.title)
    },
    playVideo(video) {
      // Implement video playback logic
      console.log('Playing video:', video.title)
    },
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
