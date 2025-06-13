<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar - Hidden on mobile -->
    <div class="hidden md:block">
      <Sidebar />
    </div>

    <!-- Main Content -->
    <div class="ml-0 md:ml-64">
      <div class="pt-16">
        <!-- Prediction History Container -->
        <div class="p-2 md:p-4 max-w-full md:max-w-[95%] mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-10 mb-20">
            <div class="flex justify-between items-center mb-8">
              <h1 class="text-2xl font-bold dark:text-white">Prediction History</h1>
              <button
                @click="fetchPredictions"
                :disabled="loading"
                class="text-purple-600 hover:text-purple-700 disabled:text-purple-400"
              >
                <i class="fas fa-arrows-rotate mr-2"></i>
                {{ loading ? 'Refreshing...' : 'Refresh' }}
              </button>
            </div>

            <!-- Statistics Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              <!-- Total Predictions -->
              <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-blue-600 dark:text-blue-200 font-medium">Total Predictions</p>
                    <h3 class="text-2xl font-bold mt-1 dark:text-white">
                      {{ filteredPredictions.length }}
                    </h3>
                  </div>
                  <div class="text-blue-600 dark:text-blue-200">
                    <i class="fas fa-chart-line text-xl"></i>
                  </div>
                </div>
              </div>

              <!-- High Risk -->
              <div class="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-red-600 dark:text-red-200 font-medium">High Risk</p>
                    <h3 class="text-2xl font-bold mt-1 dark:text-white">{{ highRiskCount }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300 mt-1">
                      {{ highRiskPercentage }}% of total
                    </p>
                  </div>
                  <div class="text-red-600 dark:text-red-200">
                    <i class="fas fa-triangle-exclamation text-xl"></i>
                  </div>
                </div>
              </div>

              <!-- Moderate Risk -->
              <div class="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-yellow-600 dark:text-yellow-200 font-medium">Moderate Risk</p>
                    <h3 class="text-2xl font-bold mt-1 dark:text-white">{{ moderateRiskCount }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300 mt-1">
                      {{ moderateRiskPercentage }}% of total
                    </p>
                  </div>
                  <div class="text-yellow-600 dark:text-yellow-200">
                    <i class="fas fa-exclamation-circle text-xl"></i>
                  </div>
                </div>
              </div>

              <!-- Low Risk -->
              <div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-green-600 dark:text-green-200 font-medium">Low Risk</p>
                    <h3 class="text-2xl font-bold mt-1 dark:text-white">{{ lowRiskCount }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300 mt-1">
                      {{ lowRiskPercentage }}% of total
                    </p>
                  </div>
                  <div class="text-green-600 dark:text-green-200">
                    <i class="fas fa-check-circle text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- Prediction Table -->
            <div class="-mx-4 sm:mx-0 overflow-x-auto">
              <div class="inline-block min-w-full align-middle">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Age
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Gender
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Risk Level
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Risk Score
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <tr v-if="loading">
                      <td
                        colspan="6"
                        class="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        Loading predictions...
                      </td>
                    </tr>
                    <tr v-else-if="loading">
                      <td
                        colspan="6"
                        class="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        <i class="fas fa-circle-notch fa-spin mr-2"></i>
                        Loading predictions...
                      </td>
                    </tr>
                    <tr v-else-if="filteredPredictions.length === 0">
                      <td
                        colspan="6"
                        class="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        No prediction history found.
                      </td>
                    </tr>
                    <tr
                      v-for="prediction in paginatedPredictions"
                      :key="prediction._id"
                      class="dark:hover:bg-gray-700"
                    >
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {{ formatDate(prediction.createdAt) }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {{ prediction.inputData.age }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {{ prediction.inputData.gender }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          :class="{
                            'px-2 py-1 text-xs font-medium rounded-full': true,
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                              prediction.result.prediction === 'High Risk',
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                              prediction.result.prediction === 'Moderate Risk',
                            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                              prediction.result.prediction === 'Low Risk',
                          }"
                        >
                          {{ prediction.result.prediction }}
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {{ prediction.result.riskScore }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                      >
                        <button
                          @click="viewPrediction(prediction._id)"
                          class="text-blue-600 hover:text-blue-700 mr-3"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          @click="confirmDelete(prediction._id)"
                          class="text-red-600 hover:text-red-700"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div
                class="text-sm text-center sm:text-left text-gray-700 dark:text-gray-300 w-full sm:w-auto"
              >
                Showing {{ paginationStart }} to {{ paginationEnd }} of
                {{ filteredPredictions.length }} results
              </div>
              <div class="flex items-center space-x-2">
                <!-- Previous button -->
                <button
                  @click="currentPage = currentPage - 1"
                  :disabled="currentPage === 1"
                  class="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i class="fas fa-chevron-left mr-1"></i>
                  <span class="hidden sm:inline">Previous</span>
                </button>

                <!-- Page numbers -->
                <div class="hidden sm:flex space-x-2">
                  <button
                    v-for="page in totalPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="{
                      'px-3 py-1 rounded-md': true,
                      'bg-purple-600 text-white': currentPage === page,
                      'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600':
                        currentPage !== page,
                    }"
                  >
                    {{ page }}
                  </button>
                </div>

                <!-- Current page indicator for mobile -->
                <span class="sm:hidden text-sm text-gray-700 dark:text-gray-300">
                  Page {{ currentPage }} of {{ totalPages }}
                </span>

                <!-- Next button -->
                <button
                  @click="currentPage = currentPage + 1"
                  :disabled="currentPage === totalPages"
                  class="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span class="hidden sm:inline">Next</span>
                  <i class="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="ml-0 md:ml-64">
      <Footer />
    </div>

    <!-- Prediction Detail Modal -->
    <PredictionDetailModal
      :show="showModal"
      :prediction="selectedPrediction"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import { PredictionPresenter } from '@/presenters/PredictionPresenter'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import PredictionDetailModal from '@/components/PredictionDetailModal.vue'

export default {
  name: 'PredictionHistory',
  components: {
    Footer,
    Sidebar,
    PredictionDetailModal,
  },
  data() {
    return {
      predictions: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
      showModal: false,
      selectedPrediction: null,
    }
  },
  computed: {
    filteredPredictions() {
      return this.predictions
    },
    totalPages() {
      return Math.ceil(this.filteredPredictions.length / this.itemsPerPage)
    },
    paginatedPredictions() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredPredictions.slice(start, end)
    },
    paginationStart() {
      return (this.currentPage - 1) * this.itemsPerPage + 1
    },
    paginationEnd() {
      return Math.min(this.currentPage * this.itemsPerPage, this.filteredPredictions.length)
    },
    highRiskCount() {
      return this.filteredPredictions.filter((p) => p.result.prediction === 'High Risk').length
    },
    lowRiskCount() {
      return this.filteredPredictions.filter((p) => p.result.prediction === 'Low Risk').length
    },
    moderateRiskCount() {
      return this.filteredPredictions.filter((p) => p.result.prediction === 'Moderate Risk').length
    },
    highRiskPercentage() {
      return this.filteredPredictions.length
        ? Math.round((this.highRiskCount / this.filteredPredictions.length) * 100)
        : 0
    },
    lowRiskPercentage() {
      return this.filteredPredictions.length
        ? Math.round((this.lowRiskCount / this.filteredPredictions.length) * 100)
        : 0
    },
    moderateRiskPercentage() {
      return this.filteredPredictions.length
        ? Math.round((this.moderateRiskCount / this.filteredPredictions.length) * 100)
        : 0
    },
  },
  created() {
    this.presenter = new PredictionPresenter(this)
    this.fetchPredictions()
  },
  methods: {
    setLoading(value) {
      this.loading = value
    },
    showError(message) {
      alert(message) // You can replace this with a better notification system
    },
    showSuccess(message) {
      alert(message) // You can replace this with a better notification system
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString()
    },
    async fetchPredictions() {
      try {
        const predictions = await this.presenter.getPredictionHistory()
        console.log('Fetched predictions:', predictions) // Debug log
        this.predictions = predictions
      } catch (error) {
        console.error('Failed to fetch predictions:', error)
      }
    },
    async viewPrediction(id) {
      console.log('Viewing prediction with id:', id) // Debug log
      try {
        const prediction = await this.presenter.getPredictionById(id)
        console.log('Fetched prediction details:', prediction) // Debug log
        this.selectedPrediction = prediction
        this.showModal = true
      } catch (error) {
        console.error('Failed to fetch prediction details:', error)
        this.showError('Failed to load prediction details')
      }
    },
    async confirmDelete(id) {
      console.log('Deleting prediction with id:', id) // Debug log
      if (confirm('Are you sure you want to delete this prediction?')) {
        try {
          await this.presenter.deletePrediction(id)
          this.showSuccess('Prediction deleted successfully')
          await this.fetchPredictions()
        } catch (error) {
          console.error('Failed to delete prediction:', error)
          this.showError('Failed to delete prediction')
        }
      }
    },
  },
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.router-link-active {
  background-color: rgba(107, 114, 128, 0.5);
}
</style>
