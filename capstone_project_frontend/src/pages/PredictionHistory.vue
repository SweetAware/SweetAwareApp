<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Prediction History</h1>
            <button
              @click="loadPredictionHistory"
              class="text-blue-600 hover:text-blue-800 flex items-center gap-2"
              :disabled="isLoading"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                :class="{ 'animate-spin': isLoading }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh
            </button>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="text-center py-8">
            <div
              class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"
            ></div>
            <p class="text-gray-600 mt-4">Loading predictions...</p>
          </div>

          <!-- Empty State -->
          <div v-else-if="!predictions.length" class="text-center py-8">
            <svg
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p class="text-gray-600 mb-4">No predictions found</p>
            <router-link
              to="/diagnose"
              class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Make your first prediction
            </router-link>
          </div>

          <!-- Prediction List -->
          <div v-else class="space-y-6">
            <div
              v-for="prediction in predictions"
              :key="prediction._id"
              class="bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <!-- Prediction Card Header -->
              <div class="p-6 border-b">
                <div class="flex justify-between items-start">
                  <div>
                    <div class="flex items-center space-x-4 mb-2">
                      <h3 class="text-xl font-semibold">
                        {{ formatDate(prediction.createdAt) }}
                      </h3>
                      <span
                        :class="{
                          'bg-red-100 text-red-800': prediction.result.prediction === 'High Risk',
                          'bg-green-100 text-green-800':
                            prediction.result.prediction === 'Low Risk',
                        }"
                        class="px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {{ prediction.result.prediction }}
                      </span>
                    </div>
                    <p class="text-gray-600">
                      Risk Score:
                      <span class="font-medium"
                        >{{ Math.round(prediction.result.riskScore * 100) }}%</span
                      >
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="viewDetails(prediction)"
                      class="text-blue-600 hover:text-blue-800 p-2"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button
                      @click="confirmDelete(prediction._id)"
                      class="text-red-600 hover:text-red-800 p-2"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Prediction Input Data -->
              <div class="p-6 bg-gray-50">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span class="text-sm text-gray-500">Age</span>
                    <p class="font-medium">{{ prediction.inputData.age }} years</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Gender</span>
                    <p class="font-medium capitalize">{{ prediction.inputData.gender }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">BMI</span>
                    <p class="font-medium">{{ prediction.inputData.bmi }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Blood Glucose</span>
                    <p class="font-medium">{{ prediction.inputData.bloodGlucoseLevel }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Details Modal -->
    <div
      v-if="selectedPrediction"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-2xl font-bold">Prediction Details</h3>
          <button @click="selectedPrediction = null" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Risk Assessment -->
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="text-lg font-semibold">Risk Level</h4>
              <p
                class="text-lg mt-2"
                :class="{
                  'text-red-600': selectedPrediction.result.prediction === 'High Risk',
                  'text-green-600': selectedPrediction.result.prediction === 'Low Risk',
                }"
              >
                {{ selectedPrediction.result.prediction }}
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold">Risk Score</h4>
              <p class="text-lg mt-2">
                {{ Math.round(selectedPrediction.result.riskScore * 100) }}%
              </p>
            </div>
          </div>
        </div>

        <!-- Risk Factors and Recommendations -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-4">Risk Factors</h4>
            <ul class="space-y-2">
              <li
                v-for="(status, factor) in selectedPrediction.result.details.factors"
                :key="factor"
                class="flex justify-between items-center"
              >
                <span class="capitalize">{{ formatFactor(factor) }}</span>
                <span
                  :class="{
                    'text-red-600':
                      status === 'High' || status === 'Elevated' || status === 'Present',
                    'text-green-600': status === 'Normal' || status === 'Absent',
                  }"
                >
                  {{ status }}
                </span>
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h4 class="text-lg font-semibold mb-4">Healthy Food Recommendations</h4>
            <div class="space-y-4">
              <div
                v-for="(category, index) in selectedPrediction.result.recommendations.healthyFoods"
                :key="index"
              >
                <h5 class="font-medium text-gray-700 mb-2">{{ category.category }}</h5>
                <ul class="list-disc list-inside text-gray-600 ml-2">
                  <li v-for="option in category.options" :key="option">{{ option }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-semibold mb-3">Lifestyle Recommendations</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li
                v-for="(rec, index) in selectedPrediction.result.recommendations.lifestyle"
                :key="index"
              >
                {{ rec }}
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-3">Monitoring Recommendations</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li
                v-for="(rec, index) in selectedPrediction.result.recommendations.monitoring"
                :key="index"
              >
                {{ rec }}
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-3">Consultation Recommendations</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li
                v-for="(rec, index) in selectedPrediction.result.recommendations.consultation"
                :key="index"
              >
                {{ rec }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteConfirm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 class="text-xl font-semibold mb-4">Delete Prediction</h3>
        <p class="text-gray-600 mb-6">
          Are you sure you want to delete this prediction? This action cannot be undone.
        </p>
        <div class="flex justify-end space-x-4">
          <button
            @click="showDeleteConfirm = false"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            @click="deletePredictionRecord"
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/diagnose/Sidebar.vue'
import { useAuth } from '@/stores/auth'
import { getPredictionHistory, deletePrediction as deleteApi } from '@/services/api'

const router = useRouter()
const { token, isLoggedIn } = useAuth()

const predictions = ref([])
const isLoading = ref(false)
const selectedPrediction = ref(null)
const showDeleteConfirm = ref(false)
const predictionToDelete = ref(null)

// Format date helper
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Format factor name
const formatFactor = (factor) => {
  return factor
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase())
}

// Load predictions
const loadPredictionHistory = async () => {
  if (!isLoggedIn.value) {
    router.push('/signin')
    return
  }

  try {
    isLoading.value = true
    const response = await getPredictionHistory(token.value)
    if (response.status === 'success') {
      predictions.value = response.data.predictions.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      )
    }
  } catch (error) {
    console.error('Error fetching predictions:', error)
    alert(error.message || 'An error occurred while loading predictions')
  } finally {
    isLoading.value = false
  }
}

// View prediction details
const viewDetails = (prediction) => {
  selectedPrediction.value = prediction
}

// Delete prediction
const confirmDelete = (id) => {
  predictionToDelete.value = id
  showDeleteConfirm.value = true
}

const deletePredictionRecord = async () => {
  if (!predictionToDelete.value) {
    alert('No prediction selected for deletion')
    return
  }

  try {
    isLoading.value = true
    const response = await deleteApi(predictionToDelete.value, token.value)
    if (response.status === 'success') {
      predictions.value = predictions.value.filter((p) => p._id !== predictionToDelete.value)
      showDeleteConfirm.value = false
      predictionToDelete.value = null
    }
  } catch (error) {
    console.error('Error deleting prediction:', error)
    alert(error.message || 'An error occurred while deleting the prediction')
  } finally {
    isLoading.value = false
    showDeleteConfirm.value = false
  }
}

onMounted(() => {
  loadPredictionHistory()
})
</script>
