<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4 py-8 pt-28">
      <!-- Search and Filter Section -->
      <div class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <div class="relative flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari artikel..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              @input="handleSearch"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div class="flex gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="filterByCategory(category)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
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
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
        role="alert"
      >
        {{ error }}
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="article in filteredArticles"
          :key="article.url"
          class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Article Image Container -->
          <div class="relative overflow-hidden">
            <img
              :src="article.imageUrl"
              :alt="article.title"
              class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError"
            />
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                  />
                </svg>
                {{ article.source }}
              </span>
            </div>
          </div>

          <!-- Article Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(article.publishedAt) }}
              </span>
            </div>

            <h3
              class="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors duration-300"
            >
              {{ article.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{{ article.summary }}</p>

            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="articles.length > 0" class="mt-8 text-center">
        <button
          @click="loadMore"
          class="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          Muat Lebih Banyak
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
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
  },
})
</script>
