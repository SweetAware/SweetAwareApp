<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 py-8 pt-28">
      <!-- Hero Section -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Artikel Diabetes & Kesehatan
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Temukan informasi terpercaya tentang diabetes, gaya hidup sehat, dan tips kesehatan dari
          tim medis profesional kami.
        </p>
      </div>

      <!-- Search and Filter Section -->
      <div
        class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="flex flex-col lg:flex-row gap-6">
          <!-- Search Bar -->
          <div class="relative flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari artikel..."
              class="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              @input="handleSearch"
            />
            <i
              class="fas fa-search text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
            ></i>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="filterByCategory(category)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <!-- Error Alert -->
      <div
        v-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4"
        data-aos="fade-in"
        role="alert"
      >
        <div class="flex items-center">
          <i class="fas fa-exclamation-circle mr-2"></i>
          {{ error }}
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]" data-aos="fade">
        <div class="flex flex-col items-center gap-4">
          <div
            class="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"
          ></div>
          <p class="text-gray-600 dark:text-gray-400">Memuat artikel...</p>
        </div>
      </div>
      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(article, index) in filteredArticles"
          :key="article.url"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 * (index % 3)"
        >
          <!-- Article Image Container -->
          <div class="relative overflow-hidden">
            <img
              :src="article.imageUrl"
              :alt="article.title"
              class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError"
            />
            <!-- Source Badge -->
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600/90 text-white shadow-lg backdrop-blur-sm"
              >
                <i class="fas fa-newspaper text-sm mr-1.5"></i>
                {{ article.source }}
              </span>
            </div>
            <!-- Category Badge -->
            <div class="absolute bottom-4 left-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black/50 text-white backdrop-blur-sm"
              >
                <i class="fas fa-tag text-xs mr-1.5"></i>
                {{ article.category || 'Kesehatan' }}
              </span>
            </div>
          </div>

          <!-- Article Content -->
          <div class="p-6">
            <!-- Date and Read Time -->
            <div class="flex items-center gap-4 mb-3">
              <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <i class="far fa-calendar-alt mr-1.5"></i>
                {{ formatDate(article.publishedAt) }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <i class="far fa-clock mr-1.5"></i>
                5 min read
              </span>
            </div>

            <!-- Title -->
            <h3
              class="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2 group-hover:text-purple-600 transition-colors duration-300"
            >
              {{ article.title }}
            </h3>

            <!-- Summary -->
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ article.summary }}
            </p>

            <!-- Stats and Actions -->
            <div class="flex items-center justify-between mb-4">
              <!-- Views and Likes -->
              <div class="flex items-center gap-4">
                <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <i class="far fa-eye mr-1.5"></i>
                  {{ article.views || 0 }}
                </span>
                <button
                  @click="toggleLike(article)"
                  class="text-sm flex items-center gap-1.5 transition-colors duration-200"
                  :class="
                    article.isLiked
                      ? 'text-red-500'
                      : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                  "
                >
                  <i :class="['fa-heart', article.isLiked ? 'fas' : 'far']"></i>
                  {{ article.likes || 0 }}
                </button>
              </div>

              <!-- Bookmark and Share -->
              <div class="flex items-center gap-3">
                <button
                  @click="toggleBookmark(article)"
                  class="text-gray-500 dark:text-gray-400 hover:text-purple-600 transition-colors duration-200"
                >
                  <i
                    :class="[
                      'text-lg',
                      article.isBookmarked ? 'fas fa-bookmark text-purple-600' : 'far fa-bookmark',
                    ]"
                  ></i>
                </button>
                <button
                  @click="shareArticle(article)"
                  class="text-gray-500 dark:text-gray-400 hover:text-purple-600 transition-colors duration-200"
                >
                  <i class="fas fa-share-alt text-lg"></i>
                </button>
              </div>
            </div>

            <!-- Read More Button -->
            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 w-full justify-center bg-gray-100 dark:bg-gray-700 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-600 hover:text-white dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-all duration-300"
            >
              Baca Selengkapnya
              <i class="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- No Results Message -->
      <div v-if="!loading && filteredArticles.length === 0" class="text-center py-12">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4"
        >
          <i class="fas fa-search text-2xl text-gray-400"></i>
        </div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Tidak ada artikel ditemukan
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          Coba ubah kata kunci pencarian atau filter kategori Anda
        </p>
      </div>

      <!-- Load More Button -->
      <div v-if="articles.length > 0 && !loading" class="mt-12 text-center">
        <button
          @click="loadMore"
          class="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105"
        >
          <span>Muat Lebih Banyak</span>
          <i class="fas fa-arrow-down text-sm"></i>
        </button>
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Menampilkan {{ filteredArticles.length }} dari {{ articles.length }} artikel
        </p>
      </div>

      <!-- Back to Top Button -->
      <button
        @click="scrollToTop"
        class="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticlePresenter from '../presenters/ArticlePresenter'

interface Article {
  url: string
  imageUrl: string
  title: string
  source: string
  publishedAt: string
  summary: string
  category?: string // Optional field
  likes?: number
  views?: number
  isLiked?: boolean
  isBookmarked?: boolean
}

export default defineComponent({
  name: 'Articles',
  data() {
    return {
      presenter: new ArticlePresenter(),
      articles: [] as Article[],
      loading: false,
      error: null as string | null,
      currentLimit: 10,
      searchQuery: '',
      selectedCategory: 'Semua',
      categories: ['Semua', 'Diabetes', 'Kesehatan', 'Gaya Hidup', 'Nutrisi'],
    }
  },
  computed: {
    filteredArticles(): Article[] {
      let filtered = [...this.articles]

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.summary.toLowerCase().includes(query),
        )
      }

      // Apply category filter
      if (this.selectedCategory !== 'Semua') {
        filtered = filtered.filter(
          (article) =>
            article.title.toLowerCase().includes(this.selectedCategory.toLowerCase()) ||
            article.summary.toLowerCase().includes(this.selectedCategory.toLowerCase()),
        )
      }

      return filtered
    },
  },
  created() {
    this.presenter.setView(this)
    this.loadArticles()
  },
  methods: {
    async loadArticles() {
      await this.presenter.loadArticles('diabetes', this.currentLimit)
    },
    setLoading(isLoading: boolean) {
      this.loading = isLoading
    },
    displayArticles(articles: Article[]) {
      this.articles = articles
      this.error = null
    },
    showError(message: string) {
      this.error = message
    },
    formatDate(dateString: string) {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    handleImageError(event: Event) {
      const target = event.target as HTMLImageElement
      target.src = '/src/assets/images/illustration.png'
    },
    loadMore() {
      this.currentLimit += 10
      this.loadArticles()
    },
    handleSearch() {
      // Debounce implementation could be added here if needed
    },
    filterByCategory(category: string) {
      this.selectedCategory = category
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    toggleLike(article: Article) {
      if (!article.isLiked) {
        article.likes = (article.likes || 0) + 1
        article.isLiked = true
      } else {
        article.likes = (article.likes || 1) - 1
        article.isLiked = false
      }
      // In a real app, you would call the API here
      this.presenter.updateArticle(article)
    },
    toggleBookmark(article: Article) {
      article.isBookmarked = !article.isBookmarked
      // In a real app, you would call the API here
      this.presenter.updateArticle(article)
    },
    async shareArticle(article: Article) {
      if (navigator.share) {
        try {
          await navigator.share({
            title: article.title,
            text: article.summary,
            url: article.url,
          })
        } catch (err) {
          console.error('Error sharing:', err)
        }
      } else {
        // Fallback for browsers that don't support the Web Share API
        this.copyToClipboard(article.url)
      }
    },
    copyToClipboard(text: string) {
      navigator.clipboard.writeText(text).then(
        () => {
          // Show success message (in a real app you would use a toast notification)
          alert('Link copied to clipboard!')
        },
        (err) => {
          console.error('Could not copy text:', err)
        },
      )
    },
  },
})
</script>
