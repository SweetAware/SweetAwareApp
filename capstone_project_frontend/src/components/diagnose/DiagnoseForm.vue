<template>
  <div>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Age">
          <input
            v-model="formData.age"
            type="number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your age"
            required
            min="0"
            max="120"
          />
        </FormField>

        <FormField label="Gender">
          <ToggleButtons
            :options="['Male', 'Female']"
            v-model="formData.gender"
            :button-classes="{
              Male: 'bg-blue-100 border-blue-500 text-blue-700',
              Female: 'bg-pink-100 border-pink-500 text-pink-700',
            }"
          />
        </FormField>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Body Mass Index (BMI)">
          <input
            v-model="formData.bmi"
            type="number"
            step="0.1"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your BMI"
            required
            min="10"
            max="60"
          />
        </FormField>

        <FormField label="Blood Glucose Level">
          <input
            v-model="formData.bloodGlucoseLevel"
            type="number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blood glucose level"
            required
          />
        </FormField>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Hypertension">
          <ToggleButtons
            :options="['Yes', 'No']"
            v-model="formData.hypertensionText"
            :button-classes="{
              Yes: 'bg-red-100 border-red-500 text-red-700',
              No: 'bg-green-100 border-green-500 text-green-700',
            }"
          />
        </FormField>

        <FormField label="Heart Disease">
          <ToggleButtons
            :options="['Yes', 'No']"
            v-model="formData.heartDiseaseText"
            :button-classes="{
              Yes: 'bg-red-100 border-red-500 text-red-700',
              No: 'bg-green-100 border-green-500 text-green-700',
            }"
          />
        </FormField>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="HbA1c Level">
          <input
            v-model="formData.hbA1cLevel"
            type="number"
            step="0.1"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter HbA1c level"
            required
            min="0"
            max="20"
          />
        </FormField>

        <FormField label="Smoking History">
          <ToggleButtons
            :options="['Never', 'Former', 'Current']"
            v-model="formData.smokingHistory"
            :button-classes="{
              Never: 'bg-green-100 border-green-500 text-green-700',
              Former: 'bg-yellow-100 border-yellow-500 text-yellow-700',
              Current: 'bg-red-100 border-red-500 text-red-700',
            }"
          />
        </FormField>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-medium transition-colors mt-8 disabled:bg-gray-400"
      >
        {{ isLoading ? 'Processing...' : 'Predict' }}
      </button>
    </form>

    <!-- Login Required Modal -->
    <div
      v-if="showLoginModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Login Required</h3>
          <p class="text-gray-600 mb-6">
            Please login or create an account to see your prediction results.
          </p>
          <div class="flex flex-col space-y-3">
            <router-link
              to="/signin"
              class="w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
            >
              Sign In
            </router-link>
            <router-link
              to="/signup"
              class="w-full px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Sign Up
            </router-link>
            <button
              @click="showLoginModal = false"
              class="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Modal -->
    <div
      v-if="showResultsModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="text-right">
          <button @click="showResultsModal = false" class="text-gray-500 hover:text-gray-700">
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

        <div v-if="predictionResult" class="mt-4">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900">Your Diabetes Risk Assessment</h3>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h4 class="text-xl font-semibold">Risk Level</h4>
                <p
                  class="text-lg mt-2"
                  :class="{
                    'text-red-600': predictionResult.result.prediction === 'High Risk',
                    'text-green-600': predictionResult.result.prediction === 'Low Risk',
                  }"
                >
                  {{ predictionResult.result.prediction }}
                </p>
              </div>
              <div>
                <h4 class="text-xl font-semibold">Risk Score</h4>
                <p class="text-lg mt-2">
                  {{ Math.round(predictionResult.result.riskScore * 100) }}%
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-lg font-semibold mb-4">Risk Factors</h4>
              <ul class="space-y-2">
                <li
                  v-for="(status, factor) in predictionResult.result.details.factors"
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
                  v-for="(category, index) in predictionResult.result.recommendations.healthyFoods"
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
                  v-for="(rec, index) in predictionResult.result.recommendations.lifestyle"
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
                  v-for="(rec, index) in predictionResult.result.recommendations.monitoring"
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
                  v-for="(rec, index) in predictionResult.result.recommendations.consultation"
                  :key="index"
                >
                  {{ rec }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FormField from './FormField.vue'
import ToggleButtons from './ToggleButtons.vue'
import { useAuth } from '@/stores/auth'
import { createPrediction } from '@/services/api'

const { isLoggedIn, token } = useAuth()
const showLoginModal = ref(false)
const showResultsModal = ref(false)
const isLoading = ref(false)
const predictionResult = ref(null)

const formData = ref({
  age: '',
  gender: 'Male',
  bmi: '',
  bloodGlucoseLevel: '',
  hypertensionText: 'No',
  heartDiseaseText: 'No',
  hbA1cLevel: '',
  smokingHistory: 'Never',
})

// Computed properties for boolean values
const hypertension = computed(() => formData.value.hypertensionText === 'Yes')
const heartDisease = computed(() => formData.value.heartDiseaseText === 'Yes')

const formatFactor = (factor) => {
  return factor
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase())
}

const handleSubmit = async () => {
  if (!isLoggedIn.value) {
    showLoginModal.value = true
    return
  }

  try {
    isLoading.value = true
    const predictionData = {
      age: Number(formData.value.age),
      gender: formData.value.gender,
      bmi: Number(formData.value.bmi),
      bloodGlucoseLevel: Number(formData.value.bloodGlucoseLevel),
      hypertension: hypertension.value,
      heartDisease: heartDisease.value,
      hbA1cLevel: Number(formData.value.hbA1cLevel),
      smokingHistory: formData.value.smokingHistory.toLowerCase(),
    }

    const response = await createPrediction(predictionData, token.value)

    if (response.status === 'success') {
      predictionResult.value = response.data
      showResultsModal.value = true
    }
  } catch (error) {
    console.error('Error creating prediction:', error)
    alert(error.message || 'An error occurred while creating the prediction')
  } finally {
    isLoading.value = false
  }
}
</script>
