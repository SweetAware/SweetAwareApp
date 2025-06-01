<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Articles</h1>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-8">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"
        ></div>
        <p class="text-gray-600 mt-4">Loading articles...</p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <p>{{ error }}</p>
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="article in articles"
          :key="article.url"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <!-- Article Image -->
          <img :src="article.imageUrl" :alt="article.title" class="w-full h-48 object-cover" />

          <div class="p-6">
            <!-- Source and Date -->
            <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
              <span>{{ article.source }}</span>
              <span>{{ formatDate(article.publishedAt) }}</span>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ article.title }}</h2>

            <!-- Summary -->
            <p class="text-gray-600 mb-4 line-clamp-3">{{ article.summary }}</p>

            <!-- Read More Link -->
            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticles } from '@/services/api'

const articles = ref([])
const loading = ref(true)
const error = ref(null)

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(async () => {
  try {
    const response = await getArticles()
    articles.value = response
  } catch (err) {
    error.value = err.message || 'Failed to fetch articles'
  } finally {
    loading.value = false
  }
})
</script>
