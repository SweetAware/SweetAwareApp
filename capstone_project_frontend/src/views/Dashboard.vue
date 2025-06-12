<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8 pt-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Welcome back! Here's an overview of your health predictions.
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid gap-6 mb-8">
        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Total Predictions -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <i class="fas fa-chart-line text-blue-600 dark:text-blue-200"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Predictions
                </p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ statistics.total }}
                </p>
              </div>
            </div>
          </div>

          <!-- Risk Score Average -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <i class="fas fa-gauge-high text-purple-600 dark:text-purple-200"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Risk Score</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ averageRiskScore }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Low Risk Cases -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <i class="fas fa-check-circle text-green-600 dark:text-green-200"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Low Risk Cases</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ statistics.lowRisk }}
                </p>
              </div>
            </div>
          </div>

          <!-- Moderate Risk Cases -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                <i class="fas fa-exclamation-circle text-yellow-600 dark:text-yellow-200"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Moderate Risk Cases
                </p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ statistics.moderateRisk }}
                </p>
              </div>
            </div>
          </div>

          <!-- High Risk Cases -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-red-100 dark:bg-red-900">
                <i class="fas fa-triangle-exclamation text-red-600 dark:text-red-200"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">High Risk Cases</p>
                <p class="text-2xl font-semibold text-gray-900 dark:text-white">
                  {{ statistics.highRisk }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Trend Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-[400px]">
          <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Risk Score Trend</h2>
          <div class="h-[calc(100%-2rem)]">
            <Line :data="trendChartData" :options="trendChartOptions" />
          </div>
        </div>
        <!-- Distribution Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-[400px]">
          <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Risk Distribution
          </h2>
          <div class="flex items-center justify-center h-[calc(100%-2rem)]">
            <Doughnut :data="distributionChartData" :options="distributionChartOptions" />
          </div>
        </div>
      </div>

      <!-- Recent Predictions with Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Predictions</h2>
            <div class="mt-4 md:mt-0 flex space-x-4">
              <select
                v-model="filter.risk"
                class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Risks</option>
                <option value="High Risk">High Risk</option>
                <option value="Moderate Risk">Moderate Risk</option>
                <option value="Low Risk">Low Risk</option>
              </select>
              <select
                v-model="filter.period"
                class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Risk Level
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Risk Score
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="prediction in filteredPredictions" :key="prediction._id">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {{ formatDate(prediction.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'px-2 py-1 text-xs font-medium rounded-full': true,
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                        prediction.result.prediction === 'High Risk',
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                        prediction.result.prediction === 'Moderate Risk',
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
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    @click="viewPrediction(prediction._id)"
                    class="text-purple-600 hover:text-purple-900 dark:hover:text-purple-400"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Prediction Detail Modal -->
  <PredictionDetailModal
    :show="showModal"
    :prediction="selectedPrediction"
    @close="showModal = false"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Line, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  ArcElement,
  RadialLinearScale,
  Filler,
} from 'chart.js'
import { PredictionModel } from '@/models/PredictionModel'
import PredictionDetailModal from '@/components/PredictionDetailModal.vue'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  ArcElement,
  RadialLinearScale,
  Filler,
)

export default defineComponent({
  name: 'Dashboard',
  components: {
    Line,
    Doughnut,
    PredictionDetailModal,
  },
  data() {
    return {
      predictions: [],
      statistics: {
        total: 0,
        highRisk: 0,
        lowRisk: 0,
        moderateRisk: 0,
        highRiskPercentage: 0,
        lowRiskPercentage: 0,
        moderateRiskPercentage: 0,
      },
      filter: {
        risk: '',
        period: '7',
      },
      showModal: false,
      selectedPrediction: null,
      trendChartData: {
        labels: [],
        datasets: [
          {
            label: 'Risk Score',
            data: [],
            borderColor: '#8B5CF6',
            tension: 0.4,
          },
        ],
      },
      trendChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 4,
            hitRadius: 10,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
            grid: {
              color: 'rgba(128,128,128,0.1)',
            },
            ticks: {
              color: 'rgb(156, 163, 175)',
              callback: function (value) {
                return value.toFixed(1)
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'rgb(156, 163, 175)',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: 'rgb(255, 255, 255)',
            bodyColor: 'rgb(255, 255, 255)',
            displayColors: false,
            callbacks: {
              label: function (context) {
                return `Risk Score: ${context.parsed.y.toFixed(2)}`
              },
            },
          },
        },
      },
      distributionChartData: {
        labels: ['High Risk', 'Moderate Risk', 'Low Risk'],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ['#EF4444', '#F59E0B', '#10B981'],
          },
        ],
      },
      distributionChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              color: 'rgb(156, 163, 175)',
              font: {
                size: 14,
              },
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: 'rgb(255, 255, 255)',
            bodyColor: 'rgb(255, 255, 255)',
            callbacks: {
              label: function (context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0)
                const value = context.raw
                const percentage = total > 0 ? Math.round((value / total) * 100) : 0
                return `${context.label}: ${value} (${percentage}%)`
              },
            },
          },
        },
      },
    }
  },
  computed: {
    filteredPredictions() {
      let filtered = [...this.predictions]

      // Filter by risk level
      if (this.filter.risk) {
        filtered = filtered.filter((p) => p.result.prediction === this.filter.risk)
      }

      // Filter by time period
      const cutoff = new Date()
      cutoff.setDate(cutoff.getDate() - parseInt(this.filter.period))
      filtered = filtered.filter((p) => new Date(p.createdAt) > cutoff)

      return filtered.slice(0, 10) // Show only last 10 predictions
    },
    averageRiskScore() {
      if (!this.predictions.length) return '0.00'
      const sum = this.predictions.reduce((acc, curr) => acc + curr.result.riskScore, 0)
      return (sum / this.predictions.length).toFixed(2)
    },
  },
  watch: {
    predictions: {
      handler() {
        this.updateStatistics()
        this.updateCharts()
      },
      deep: true,
    },
  },
  async created() {
    await this.loadPredictions()
  },
  methods: {
    async loadPredictions() {
      try {
        const predictionModel = new PredictionModel()
        this.predictions = await predictionModel.getPredictionHistory()
        this.updateStatistics()
        this.updateCharts()
      } catch (error) {
        console.error('Error loading predictions:', error)
      }
    },
    updateStatistics() {
      const total = this.predictions.length
      const highRisk = this.predictions.filter((p) => p.result.prediction === 'High Risk').length
      const lowRisk = this.predictions.filter((p) => p.result.prediction === 'Low Risk').length
      const moderateRisk = this.predictions.filter(
        (p) => p.result.prediction === 'Moderate Risk',
      ).length

      this.statistics = {
        total,
        highRisk,
        lowRisk,
        moderateRisk,
        highRiskPercentage: total ? Math.round((highRisk / total) * 100) : 0,
        lowRiskPercentage: total ? Math.round((lowRisk / total) * 100) : 0,
        moderateRiskPercentage: total ? Math.round((moderateRisk / total) * 100) : 0,
      }

      // Update distribution chart
      this.distributionChartData.datasets[0].data = [highRisk, lowRisk]
    },
    updateCharts() {
      // Get last 7 predictions for trend chart
      const lastPredictions = [...this.predictions]
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(-7)

      // Update trend chart
      this.trendChartData = {
        labels: lastPredictions.map((p) => this.formatDate(p.createdAt, true)),
        datasets: [
          {
            label: 'Risk Score',
            data: lastPredictions.map((p) => p.result.riskScore),
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.4,
            fill: true,
          },
        ],
      } // Update distribution chart
      const highRisk = this.predictions.filter((p) => p.result.prediction === 'High Risk').length
      const moderateRisk = this.predictions.filter(
        (p) => p.result.prediction === 'Moderate Risk',
      ).length
      const lowRisk = this.predictions.filter((p) => p.result.prediction === 'Low Risk').length

      this.distributionChartData = {
        labels: ['High Risk', 'Moderate Risk', 'Low Risk'],
        datasets: [
          {
            data: [highRisk, moderateRisk, lowRisk],
            backgroundColor: ['#EF4444', '#F59E0B', '#10B981'],
            borderWidth: 0,
          },
        ],
      }
    },
    formatDate(dateString, short = false) {
      const options = short
        ? { month: 'short', day: 'numeric' }
        : { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      return new Date(dateString).toLocaleDateString('id-ID', options)
    },
    async viewPrediction(id) {
      try {
        const predictionModel = new PredictionModel()
        this.selectedPrediction = await predictionModel.getPredictionById(id)
        this.showModal = true
      } catch (error) {
        console.error('Error loading prediction details:', error)
      }
    },
  },
})
</script>
