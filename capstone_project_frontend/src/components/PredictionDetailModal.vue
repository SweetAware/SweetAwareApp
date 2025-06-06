<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black opacity-50"></div>

    <!-- Modal -->
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="relative bg-white rounded-xl shadow-lg max-w-4xl w-full mx-auto p-6">
        <!-- Close Button -->
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- Modal Header -->
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 bg-violet-200 rounded-full flex items-center justify-center">
            <i class="fas fa-chart-line text-violet-600"></i>
          </div>
          <h2 class="text-2xl font-semibold">Prediction Details</h2>
        </div>

        <div v-if="prediction" class="space-y-8">
          <!-- Input Data -->
          <div>
            <h3 class="text-lg font-medium mb-4">Input Data</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(value, key) in prediction.inputData"
                :key="key"
                class="p-4 bg-gray-50 rounded-lg"
              >
                <p class="text-sm text-gray-500">{{ formatLabel(key) }}</p>
                <p class="text-base font-medium">{{ formatValue(value) }}</p>
              </div>
            </div>
          </div>

          <!-- Prediction Result -->
          <div>
            <h3 class="text-lg font-medium mb-4">Results</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Risk Level -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-gray-500">Risk Level</p>
                    <h4
                      class="text-xl font-semibold mt-1"
                      :class="{
                        'text-red-600': prediction.result.prediction === 'High Risk',
                        'text-green-600': prediction.result.prediction === 'Low Risk',
                      }"
                    >
                      {{ prediction.result.prediction }}
                    </h4>
                  </div>
                  <div
                    :class="{
                      'text-2xl': true,
                      'text-red-600': prediction.result.prediction === 'High Risk',
                      'text-green-600': prediction.result.prediction === 'Low Risk',
                    }"
                  >
                    <i
                      :class="{
                        fas: true,
                        'fa-triangle-exclamation': prediction.result.prediction === 'High Risk',
                        'fa-check-circle': prediction.result.prediction === 'Low Risk',
                      }"
                    ></i>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-2">
                  Risk Score: {{ prediction.result.riskScore }}
                </p>
              </div>

              <!-- Risk Factors -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-medium mb-3">Risk Factors</h4>
                <ul class="space-y-2">
                  <li
                    v-for="(status, factor) in prediction.result.details.factors"
                    :key="factor"
                    class="flex items-center justify-between"
                  >
                    <span class="text-gray-600">{{ formatLabel(factor) }}</span>
                    <span
                      :class="{
                        'px-2 py-1 text-sm rounded-full': true,
                        'bg-red-100 text-red-800':
                          status === 'High' ||
                          status === 'Elevated' ||
                          status === 'Present' ||
                          status === 'Overweight',
                        'bg-green-100 text-green-800': status === 'Normal' || status === 'Absent',
                      }"
                    >
                      {{ status }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Recommendations -->
          <div>
            <h3 class="text-lg font-medium mb-4">Recommendations</h3>
            <div class="space-y-6">
              <!-- Lifestyle -->
              <div
                v-if="prediction.result.recommendations.lifestyle.length"
                class="bg-gray-50 p-6 rounded-lg"
              >
                <h4 class="font-medium mb-3 text-violet-600">
                  <i class="fas fa-heart mr-2"></i>Lifestyle Changes
                </h4>
                <ul class="space-y-2 list-disc list-inside text-gray-600">
                  <li
                    v-for="(item, index) in prediction.result.recommendations.lifestyle"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Monitoring -->
              <div
                v-if="prediction.result.recommendations.monitoring.length"
                class="bg-gray-50 p-6 rounded-lg"
              >
                <h4 class="font-medium mb-3 text-violet-600">
                  <i class="fas fa-chart-line mr-2"></i>Health Monitoring
                </h4>
                <ul class="space-y-2 list-disc list-inside text-gray-600">
                  <li
                    v-for="(item, index) in prediction.result.recommendations.monitoring"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Medical Consultation -->
              <div
                v-if="prediction.result.recommendations.consultation.length"
                class="bg-gray-50 p-6 rounded-lg"
              >
                <h4 class="font-medium mb-3 text-violet-600">
                  <i class="fas fa-user-doctor mr-2"></i>Medical Consultation
                </h4>
                <ul class="space-y-2 list-disc list-inside text-gray-600">
                  <li
                    v-for="(item, index) in prediction.result.recommendations.consultation"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Healthy Foods -->
              <div
                v-if="prediction.result.recommendations.healthyFoods?.length"
                class="bg-gray-50 p-6 rounded-lg"
              >
                <h4 class="font-medium mb-3 text-violet-600">
                  <i class="fas fa-apple-whole mr-2"></i>Recommended Foods
                </h4>
                <div class="space-y-4">
                  <div
                    v-for="(category, index) in prediction.result.recommendations.healthyFoods"
                    :key="index"
                    class="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <h5 class="font-medium text-gray-700 mb-2">{{ category.category }}</h5>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(option, idx) in category.options"
                        :key="idx"
                        class="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm"
                      >
                        {{ option }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="flex items-center justify-center h-64">
          <div class="text-gray-500">
            <i class="fas fa-circle-notch fa-spin text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PredictionDetailModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    prediction: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatLabel(key) {
      return key
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    formatValue(value) {
      if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No'
      }
      if (typeof value === 'number') {
        return value.toFixed(2)
      }
      return value
    },
  },
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
