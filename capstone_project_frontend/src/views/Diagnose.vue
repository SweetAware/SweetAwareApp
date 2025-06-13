<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Sidebar - Hidden on mobile -->
    <div class="hidden md:block">
      <Sidebar />
    </div>

    <!-- Main Content -->
    <div class="ml-0 md:ml-64">
      <div class="pt-16">
        <div class="p-8 space-y-8 mb-20">
          <!-- Form Container -->
          <div class="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-12">
            <h1 class="text-4xl font-bold text-center mb-4 dark:text-white">
              Welcome to SweetAware!
            </h1>
            <p class="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
              We help you self-monitor your health through smart analytics and provide real-time
              data
            </p>

            <!-- Form Information -->
            <div class="mb-8 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
              <div class="flex items-start gap-3">
                <i class="fas fa-info-circle text-violet-600 dark:text-violet-400 mt-1"></i>
                <div>
                  <p class="text-gray-700 dark:text-gray-200 mb-2">
                    Fields marked with <span class="text-red-500">*</span> are required for basic
                    prediction.
                  </p>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    Optional fields (Blood Glucose Level and HbA1c Level) enhance prediction
                    accuracy. Including these values will provide a more precise assessment of your
                    diabetes risk.
                  </p>
                </div>
              </div>
            </div>

            <!-- Form content -->
            <form @submit.prevent="handleSubmit" class="space-y-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <!-- Age Input -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Age <span class="text-red-500">*</span></label
                  >
                  <input
                    type="number"
                    v-model="predictionData.age"
                    placeholder="Enter your age"
                    required
                    class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>

                <!-- Gender Selection -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Gender <span class="text-red-500">*</span></label
                  >
                  <div class="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        predictionData.gender === 'Male'
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.gender = 'Male'"
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        predictionData.gender === 'Female'
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.gender = 'Female'"
                    >
                      Female
                    </button>
                  </div>
                </div>
                <!-- BMI Input -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block">
                    Body Mass Index (BMI) <span class="text-red-500">*</span>
                  </label>
                  <div v-if="!showBmiCalculator" class="space-y-3">
                    <input
                      type="number"
                      v-model="predictionData.bmi"
                      placeholder="Enter your BMI"
                      required
                      step="0.01"
                      class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    />
                    <button
                      type="button"
                      @click="toggleBmiCalculator"
                      class="w-full px-4 py-3 bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300 rounded-md hover:bg-violet-200 dark:hover:bg-violet-800 transition-colors flex items-center justify-center gap-2 text-base"
                    >
                      <i class="fas fa-calculator"></i>
                      <span>Calculate BMI using Height & Weight</span>
                    </button>
                  </div>
                  <div v-else class="space-y-3">
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="number"
                          v-model="height"
                          placeholder="Height (cm)"
                          class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          v-model="weight"
                          placeholder="Weight (kg)"
                          class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <button
                        type="button"
                        @click="calculateBmi"
                        class="flex-1 bg-violet-600 text-white py-3 rounded-md hover:bg-violet-700 transition-colors"
                      >
                        Calculate BMI
                      </button>
                      <button
                        type="button"
                        @click="toggleBmiCalculator"
                        class="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors dark:text-gray-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Blood Glucose Level Input -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Blood Glucose Level (optional)</label
                  >
                  <input
                    type="number"
                    v-model="predictionData.bloodGlucoseLevel"
                    placeholder="Enter blood glucose level"
                    @input="
                      (e) =>
                        (predictionData.bloodGlucoseLevel =
                          e.target.value === '' ? undefined : Number(e.target.value))
                    "
                    class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                  <p class="mt-2 text-sm text-amber-600 dark:text-amber-400">
                    <i class="fas fa-info-circle mr-1"></i>
                    Including this value will significantly improve the accuracy of your diabetes
                    risk assessment
                  </p>
                </div>

                <!-- Hypertension -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Hypertension <span class="text-red-500">*</span></label
                  >
                  <div class="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        !predictionData.hypertension
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.hypertension = false"
                    >
                      No
                    </button>
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        predictionData.hypertension
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.hypertension = true"
                    >
                      Yes
                    </button>
                  </div>
                </div>

                <!-- Heart Disease -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Heart Disease <span class="text-red-500">*</span></label
                  >
                  <div class="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        !predictionData.heartDisease
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.heartDisease = false"
                    >
                      No
                    </button>
                    <button
                      type="button"
                      :class="[
                        'px-5 py-4 rounded-md border transition-colors text-base',
                        predictionData.heartDisease
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.heartDisease = true"
                    >
                      Yes
                    </button>
                  </div>
                </div>

                <!-- HbA1c Level Input -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >HbA1c Level (optional)</label
                  >
                  <input
                    type="number"
                    v-model="predictionData.hbA1cLevel"
                    placeholder="Enter HbA1c level"
                    step="0.1"
                    @input="
                      (e) =>
                        (predictionData.hbA1cLevel =
                          e.target.value === '' ? undefined : Number(e.target.value))
                    "
                    class="w-full px-5 py-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                  <p class="mt-2 text-sm text-amber-600 dark:text-amber-400">
                    <i class="fas fa-info-circle mr-1"></i>
                    Including this value will significantly improve the accuracy of your diabetes
                    risk assessment
                  </p>
                </div>

                <!-- Smoking History -->
                <div>
                  <label class="text-base font-medium text-gray-700 dark:text-gray-200 mb-3 block"
                    >Smoking History <span class="text-red-500">*</span></label
                  >
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      :class="[
                        'px-4 py-4 rounded-md border text-base transition-colors',
                        predictionData.smokingHistory === 'never'
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.smokingHistory = 'never'"
                    >
                      Never
                    </button>
                    <button
                      type="button"
                      :class="[
                        'px-4 py-4 rounded-md border text-base transition-colors',
                        predictionData.smokingHistory === 'former'
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.smokingHistory = 'former'"
                    >
                      Former
                    </button>
                    <button
                      type="button"
                      :class="[
                        'px-4 py-4 rounded-md border text-base transition-colors',
                        predictionData.smokingHistory === 'current'
                          ? 'bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700',
                      ]"
                      @click="predictionData.smokingHistory = 'current'"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-12">
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full bg-violet-600 text-white py-5 rounded-md hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 text-base font-medium disabled:bg-violet-400"
                >
                  {{ loading ? 'Processing...' : 'Predict' }}
                </button>
              </div>
            </form>
          </div>

          <!-- Prediction Results -->
          <div v-if="predictionResult" class="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-violet-200 rounded-full flex items-center justify-center">
                <i class="fas fa-chart-line text-violet-600"></i>
              </div>
              <h2 class="text-2xl font-semibold">Prediction Results</h2>
            </div>

            <!-- Risk Level -->
            <div class="mb-8">
              <div class="flex items-center space-x-4">
                <span
                  :class="[
                    'px-4 py-2 rounded-full text-lg font-medium',
                    predictionResult.result.prediction === 'High Risk'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800',
                  ]"
                >
                  {{ predictionResult.result.prediction }}
                </span>
                <span class="text-lg">Risk Score: {{ predictionResult.result.riskScore }}</span>
              </div>
            </div>

            <!-- Risk Factors -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Risk Factors</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  v-for="(value, key) in predictionResult.result.details.factors"
                  :key="key"
                  class="p-4 bg-gray-50 rounded-lg"
                >
                  <div class="text-sm">
                    <span class="font-medium">{{ formatLabel(key) }}:</span>
                    <span
                      :class="[
                        value === 'High' ||
                        value === 'Elevated' ||
                        value === 'Overweight' ||
                        value === 'Present'
                          ? 'text-red-600'
                          : 'text-green-600',
                        'ml-2 font-medium',
                      ]"
                    >
                      {{ value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recommendations -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Recommendations</h3>
              <div class="space-y-6">
                <template
                  v-for="(recs, category) in predictionResult.result.recommendations"
                  :key="category"
                >
                  <div v-if="category !== 'healthyFoods'" class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="text-base font-medium capitalize mb-3">
                      {{ formatLabel(category) }}
                    </h4>
                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
                      <li v-for="rec in recs" :key="rec">{{ rec }}</li>
                    </ul>
                  </div>
                  <div v-else class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="text-base font-medium mb-3">Recommended Foods</h4>
                    <div class="space-y-4">
                      <div
                        v-for="food in recs"
                        :key="food.category"
                        class="bg-white p-3 rounded-md"
                      >
                        <span class="font-medium text-sm">{{ food.category }}:</span>
                        <p class="mt-1 text-sm text-gray-600">{{ food.options.join(', ') }}</p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Health Tips Section -->
          <div class="max-w-5xl mx-auto bg-[#faf5f7] dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-violet-200 dark:bg-violet-900 rounded-full flex items-center justify-center"
              >
                <i class="fas fa-heartbeat text-violet-600 dark:text-violet-300"></i>
              </div>
              <h2 class="text-xl font-semibold dark:text-white">Health Tips While You're Here</h2>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-violet-600 dark:text-violet-300 mt-1"></i>
                <span class="dark:text-gray-200"
                  >Regular monitoring of blood glucose levels is essential for managing
                  diabetes.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-violet-600 dark:text-violet-300 mt-1"></i>
                <span class="dark:text-gray-200"
                  >Aim for at least 30 minutes of moderate physical activity most days of the
                  week.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-check-circle text-violet-600 dark:text-violet-300 mt-1"></i>
                <span class="dark:text-gray-200"
                  >Maintain a balanced diet rich in fruits, vegetables, whole grains, and lean
                  proteins.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="ml-0 md:ml-64">
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'
import { PredictionPresenter } from '@/presenters/PredictionPresenter'
import { NotificationService } from '@/services/NotificationService'

export default {
  name: 'Diagnose',
  components: {
    Footer,
    Sidebar,
  },
  data() {
    return {
      predictionData: {
        gender: '',
        age: null,
        hypertension: false,
        heartDisease: false,
        smokingHistory: '',
        bmi: null,
        hbA1cLevel: undefined,
        bloodGlucoseLevel: undefined,
      },
      predictionResult: null,
      loading: false,
      processingNotification: null,
      notificationService: new NotificationService(),
      showBmiCalculator: false,
      height: null,
      weight: null,
    }
  },
  created() {
    this.presenter = new PredictionPresenter(this)
  },
  methods: {
    setLoading(value) {
      this.loading = value
    },
    showError(message) {
      alert(message)
    },
    showSuccess(message) {
      alert(message)
    },
    formatLabel(key) {
      return key
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    toggleBmiCalculator() {
      this.showBmiCalculator = !this.showBmiCalculator
      if (!this.showBmiCalculator) {
        // Reset values when closing calculator
        this.height = null
        this.weight = null
      }
    },
    calculateBmi() {
      if (!this.height || !this.weight) {
        this.showError('Please enter both height and weight')
        return
      }
      // Convert height to meters (from cm) and calculate BMI
      const heightInMeters = this.height / 100
      const bmi = this.weight / (heightInMeters * heightInMeters)
      this.predictionData.bmi = parseFloat(bmi.toFixed(1))
      this.showBmiCalculator = false
      this.height = null
      this.weight = null
    },
    async handleSubmit() {
      if (
        !this.predictionData.gender ||
        !this.predictionData.age ||
        !this.predictionData.smokingHistory ||
        !this.predictionData.bmi ||
        this.predictionData.hypertension === undefined ||
        this.predictionData.heartDisease === undefined
      ) {
        this.showError('Please fill in all required fields')
        return
      } // Handle optional fields
      if (this.predictionData.hbA1cLevel === '') {
        delete this.predictionData.hbA1cLevel
      }
      if (this.predictionData.bloodGlucoseLevel === '') {
        delete this.predictionData.bloodGlucoseLevel
      }

      try {
        this.loading = true
        const result = await this.presenter.createPrediction(this.predictionData)
        this.predictionResult = result

        // Check if notifications are subscribed
        const isSubscribed = await this.notificationService.checkSubscription()
        if (isSubscribed) {
          try {
            // Determine notification icon and message based on risk level
            let notificationIcon
            let notificationEmote
            const riskLevel = result.result.prediction.toLowerCase()

            if (riskLevel.includes('low')) {
              notificationIcon = '/src/assets/icons/low-risk.svg'
              notificationEmote = '✅ Great news!'
            } else if (riskLevel.includes('moderate')) {
              notificationIcon = '/src/assets/icons/moderate-risk.svg'
              notificationEmote = '⚠️ Stay cautious!'
            } else {
              notificationIcon = '/src/assets/icons/high-risk.svg'
              notificationEmote = '🚨 Important!'
            }

            await this.notificationService.showNotification('Diabetes Risk Prediction', {
              body: `${notificationEmote}\nRisk Level: ${result.result.prediction}\nRisk Score: ${result.result.riskScore}`,
              icon: notificationIcon,
              requireInteraction: true,
              silent: false,
              badge: notificationIcon,
            })
          } catch (notifError) {
            console.error('Notification error:', notifError)
          }
        }
      } catch (error) {
        console.error('Prediction failed:', error)
        this.showError(error.message || 'Failed to create prediction. Please try again.')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
