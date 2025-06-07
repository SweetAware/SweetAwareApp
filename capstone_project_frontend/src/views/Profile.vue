<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Profile Card -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <!-- Profile Header -->
            <div class="relative h-48 bg-purple-600">
              <div class="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <div class="relative">
                  <img
                    :src="profileImage"
                    alt="Profile"
                    class="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                  />
                  <button
                    @click="$refs.fileInput.click()"
                    class="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700"
                  >
                    <i class="fas fa-camera"></i>
                  </button>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleImageUpload"
                  />
                </div>
              </div>
            </div>

            <div class="mt-24 text-center">
              <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ username }}</h1>
              <p class="text-gray-600 dark:text-gray-400">{{ email }}</p>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="p-6">
              <div class="flex justify-center items-center h-48">
                <div
                  class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"
                ></div>
              </div>
            </div>

            <!-- Error Message -->
            <div v-else-if="error" class="p-6">
              <div class="text-red-600 dark:text-red-400 text-center py-4">
                {{ error }}
              </div>
            </div>

            <!-- Profile Form -->
            <div v-else class="p-6">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Username Field -->
                <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    v-model="form.username"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    :disabled="!isEditing"
                  />
                </div>

                <!-- Email Field -->
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    :disabled="!isEditing"
                  />
                </div>

                <!-- Change Password Section -->
                <div v-if="isEditing" class="space-y-4">
                  <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Change Password
                    </h3>
                  </div>

                  <!-- Current Password -->
                  <div>
                    <label
                      for="currentPassword"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      v-model="form.currentPassword"
                      type="password"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <!-- New Password -->
                  <div>
                    <label
                      for="newPassword"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      v-model="form.newPassword"
                      type="password"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <!-- Confirm New Password -->
                  <div>
                    <label
                      for="confirmPassword"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      v-model="form.confirmPassword"
                      type="password"
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-end space-x-4">
                  <button
                    v-if="!isEditing"
                    type="button"
                    @click="startEditing"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Edit Profile
                  </button>
                  <template v-else>
                    <button
                      type="button"
                      @click="cancelEditing"
                      class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Save Changes
                    </button>
                  </template>
                </div>
              </form>
            </div>
          </div>

          <!-- Notification Preferences -->
          <div class="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Notification Preferences
            </h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Email Notifications</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="form.emailNotifications" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                  ></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Push Notifications</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="form.pushNotifications" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                  ></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700 dark:text-gray-300">Weekly Health Summary</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="form.weeklyReport" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Statistics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Total Predictions -->
            <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-blue-600 dark:text-blue-200 font-medium">Total Predictions</p>
                  <h3 class="text-2xl font-bold mt-1 dark:text-white">
                    {{ statistics.total }}
                  </h3>
                  <p class="text-sm text-blue-600 dark:text-blue-200 mt-1">Lifetime predictions</p>
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
                  <h3 class="text-2xl font-bold mt-1 dark:text-white">
                    {{ statistics.highRisk }}
                  </h3>
                  <p class="text-sm text-red-600 dark:text-red-200 mt-1">
                    {{ statistics.highRiskPercentage }}% of total
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
                  <h3 class="text-2xl font-bold mt-1 dark:text-white">
                    {{ statistics.moderateRisk }}
                  </h3>
                  <p class="text-sm text-yellow-600 dark:text-yellow-200 mt-1">
                    {{ statistics.moderateRiskPercentage }}% of total
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
                  <h3 class="text-2xl font-bold mt-1 dark:text-white">
                    {{ statistics.lowRisk }}
                  </h3>
                  <p class="text-sm text-green-600 dark:text-green-200 mt-1">
                    {{ statistics.lowRiskPercentage }}% of total
                  </p>
                </div>
                <div class="text-green-600 dark:text-green-200">
                  <i class="fas fa-check-circle text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Health Information -->
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold dark:text-white">Health Information</h2>
              <button
                v-if="!isEditingHealth"
                @click="startEditingHealth"
                class="text-purple-600 hover:text-purple-700"
              >
                <i class="fas fa-edit"></i>
              </button>
            </div>

            <form
              v-if="isEditingHealth"
              @submit.prevent="saveHealthInfo"
              class="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Age</label
                >
                <input
                  v-model="healthForm.age"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Gender</label
                >
                <select
                  v-model="healthForm.gender"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Height (cm)</label
                >
                <input
                  v-model="healthForm.height"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Weight (kg)</label
                >
                <input
                  v-model="healthForm.weight"
                  type="number"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Blood Type</label
                >
                <select
                  v-model="healthForm.bloodType"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >Medical Conditions</label
                >
                <input
                  v-model="healthForm.medicalConditions"
                  type="text"
                  placeholder="e.g., Diabetes, Hypertension"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div class="md:col-span-2 flex justify-end space-x-4">
                <button
                  type="button"
                  @click="cancelEditingHealth"
                  class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </form>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(value, key) in healthInfo" :key="key" class="flex flex-col">
                <span class="text-sm text-gray-500 dark:text-gray-400 capitalize">{{
                  formatLabel(key)
                }}</span>
                <span class="text-gray-900 dark:text-white">{{ value }}</span>
              </div>
            </div>
          </div>

          <!-- Emergency Contacts -->
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold dark:text-white">Emergency Contacts</h2>
              <button @click="addEmergencyContact" class="text-purple-600 hover:text-purple-700">
                <i class="fas fa-plus"></i>
              </button>
            </div>

            <div class="space-y-4">
              <div
                v-for="(contact, index) in emergencyContacts"
                :key="index"
                class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">{{ contact.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ contact.relationship }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ contact.phone }}</p>
                </div>
                <button
                  @click="removeEmergencyContact(index)"
                  class="text-red-600 hover:text-red-700"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Health Goals -->
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold dark:text-white">Health Goals</h2>
              <button @click="addHealthGoal" class="text-purple-600 hover:text-purple-700">
                <i class="fas fa-plus"></i>
              </button>
            </div>

            <div class="space-y-4">
              <div
                v-for="(goal, index) in healthGoals"
                :key="index"
                class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium text-gray-900 dark:text-white">{{ goal.title }}</h3>
                  <div class="flex items-center space-x-2">
                    <button
                      @click="toggleGoalCompletion(index)"
                      :class="{
                        'text-green-600 hover:text-green-700': goal.completed,
                        'text-gray-400 hover:text-gray-500': !goal.completed,
                      }"
                    >
                      <i class="fas" :class="goal.completed ? 'fa-check-circle' : 'fa-circle'"></i>
                    </button>
                    <button
                      @click="removeHealthGoal(index)"
                      class="text-red-600 hover:text-red-700"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ goal.description }}</p>
                <div class="mt-2">
                  <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{{ goal.progress }}%</span>
                  </div>
                  <div class="mt-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                    <div
                      class="h-2 bg-purple-600 rounded-full"
                      :style="{ width: goal.progress + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold dark:text-white">Recent Activity</h2>
              <router-link
                to="/history"
                class="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                View All
                <i class="fas fa-arrow-right ml-1"></i>
              </router-link>
            </div>

            <div class="space-y-6">
              <!-- Activity Items -->
              <div
                v-if="recentPredictions.length === 0"
                class="text-center text-gray-500 dark:text-gray-400 py-4"
              >
                No recent predictions found.
              </div>

              <div
                v-for="prediction in recentPredictions"
                :key="prediction._id"
                class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div class="flex-shrink-0">
                  <span
                    :class="{
                      'w-10 h-10 rounded-full flex items-center justify-center': true,
                      'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200':
                        prediction.result.prediction === 'High Risk',
                      'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200':
                        prediction.result.prediction === 'Low Risk',
                    }"
                  >
                    <i
                      :class="{
                        fas: true,
                        'fa-triangle-exclamation': prediction.result.prediction === 'High Risk',
                        'fa-check': prediction.result.prediction === 'Low Risk',
                      }"
                    ></i>
                  </span>
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ prediction.result.prediction }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ formatDate(prediction.createdAt) }}
                    </p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Risk Score: {{ prediction.result.riskScore }}
                  </p>
                </div>
                <button
                  @click="viewPrediction(prediction._id)"
                  class="flex-shrink-0 text-purple-600 hover:text-purple-700"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
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
import { AuthModel } from '@/models/AuthModel'
import { PredictionModel } from '@/models/PredictionModel'
import PredictionDetailModal from '@/components/PredictionDetailModal.vue'
import Swal from 'sweetalert2'

export default defineComponent({
  name: 'Profile',
  components: {
    PredictionDetailModal,
  },
  data() {
    return {
      loading: true,
      error: null,
      isEditing: false,
      isEditingHealth: false,
      username: '',
      email: '',
      profileImage: '/src/assets/images/profile.jpg',
      form: {
        username: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        emailNotifications: true,
        pushNotifications: true,
        weeklyReport: true,
      },
      healthForm: {
        age: null,
        gender: '',
        height: null,
        weight: null,
        bloodType: '',
        medicalConditions: '',
      },
      healthInfo: {
        age: '35',
        gender: 'Male',
        height: '175',
        weight: '70',
        bloodType: 'O+',
        medicalConditions: 'None',
      },
      emergencyContacts: [
        {
          name: 'John Doe',
          relationship: 'Father',
          phone: '+62 812-3456-7890',
        },
      ],
      healthGoals: [
        {
          title: 'Maintain Blood Sugar',
          description: 'Keep blood sugar levels within normal range',
          progress: 75,
          completed: false,
        },
      ],
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
      showModal: false,
      selectedPrediction: null,
    }
  },
  computed: {
    recentPredictions() {
      return this.predictions.slice(0, 5)
    },
  },
  async created() {
    await Promise.all([this.loadProfile(), this.loadPredictions()])
  },
  methods: {
    async loadProfile() {
      try {
        this.loading = true
        const authModel = new AuthModel()
        const userData = await authModel.getProfile()

        this.username = userData.username
        this.email = userData.email
        this.form.username = userData.username
        this.form.email = userData.email

        // Load health info if available
        if (userData.healthInfo) {
          this.healthInfo = userData.healthInfo
          this.healthForm = { ...userData.healthInfo }
        }

        // Load emergency contacts if available
        if (userData.emergencyContacts) {
          this.emergencyContacts = userData.emergencyContacts
        }

        // Load notification preferences if available
        if (userData.preferences) {
          this.form.emailNotifications = userData.preferences.emailNotifications ?? true
          this.form.pushNotifications = userData.preferences.pushNotifications ?? true
          this.form.weeklyReport = userData.preferences.weeklyReport ?? true
        }

        this.error = null
      } catch (error) {
        this.error = 'Failed to load profile. Please try again.'
        console.error('Error loading profile:', error)
      } finally {
        this.loading = false
      }
    },
    async loadPredictions() {
      try {
        const predictionModel = new PredictionModel()
        this.predictions = await predictionModel.getPredictionHistory()
        this.updateStatistics()
      } catch (error) {
        console.error('Error loading predictions:', error)
      }
    },
    updateStatistics() {
      const total = this.predictions.length
      const highRisk = this.predictions.filter((p) => p.result.prediction === 'High Risk').length
      const moderateRisk = this.predictions.filter(
        (p) => p.result.prediction === 'Moderate Risk',
      ).length
      const lowRisk = this.predictions.filter((p) => p.result.prediction === 'Low Risk').length

      this.statistics = {
        total,
        highRisk,
        moderateRisk,
        lowRisk,
        highRiskPercentage: total ? Math.round((highRisk / total) * 100) : 0,
        moderateRiskPercentage: total ? Math.round((moderateRisk / total) * 100) : 0,
        lowRiskPercentage: total ? Math.round((lowRisk / total) * 100) : 0,
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },
    formatLabel(key) {
      return key.replace(/([A-Z])/g, ' $1').toLowerCase()
    },
    async handleImageUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      try {
        const formData = new FormData()
        formData.append('image', file)

        // Here you would typically upload the image to your server
        // const response = await api.uploadProfileImage(formData)
        // this.profileImage = response.imageUrl

        // For now, we'll just create a local URL
        this.profileImage = URL.createObjectURL(file)

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile picture updated successfully',
          timer: 1500,
          showConfirmButton: false,
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update profile picture',
        })
      }
    },
    async viewPrediction(id) {
      try {
        const predictionModel = new PredictionModel()
        this.selectedPrediction = await predictionModel.getPredictionById(id)
        this.showModal = true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to load prediction details',
        })
      }
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.isEditing = false
      this.form.username = this.username
      this.form.email = this.email
      this.form.currentPassword = ''
      this.form.newPassword = ''
      this.form.confirmPassword = ''
    },
    async handleSubmit() {
      try {
        if (this.form.newPassword && this.form.newPassword !== this.form.confirmPassword) {
          throw new Error('New passwords do not match')
        }

        // Here you would typically call your API to update the profile
        // const response = await authModel.updateProfile(this.form)

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully',
          timer: 1500,
          showConfirmButton: false,
        })

        this.username = this.form.username
        this.email = this.form.email
        this.isEditing = false
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message || 'Failed to update profile',
        })
      }
    },
    startEditingHealth() {
      this.healthForm = { ...this.healthInfo }
      this.isEditingHealth = true
    },
    cancelEditingHealth() {
      this.isEditingHealth = false
      this.healthForm = { ...this.healthInfo }
    },
    async saveHealthInfo() {
      try {
        // Here you would typically call your API to update health information
        // const response = await authModel.updateHealthInfo(this.healthForm)

        this.healthInfo = { ...this.healthForm }
        this.isEditingHealth = false

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Health information updated successfully',
          timer: 1500,
          showConfirmButton: false,
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update health information',
        })
      }
    },
    async addEmergencyContact() {
      const { value: formValues } = await Swal.fire({
        title: 'Add Emergency Contact',
        html:
          '<input id="swal-name" class="swal2-input" placeholder="Name">' +
          '<input id="swal-relationship" class="swal2-input" placeholder="Relationship">' +
          '<input id="swal-phone" class="swal2-input" placeholder="Phone Number">',
        focusConfirm: false,
        preConfirm: () => {
          return {
            name: document.getElementById('swal-name').value,
            relationship: document.getElementById('swal-relationship').value,
            phone: document.getElementById('swal-phone').value,
          }
        },
      })

      if (formValues) {
        this.emergencyContacts.push(formValues)
      }
    },
    removeEmergencyContact(index) {
      this.emergencyContacts.splice(index, 1)
    },
    async addHealthGoal() {
      const { value: formValues } = await Swal.fire({
        title: 'Add Health Goal',
        html:
          '<input id="swal-title" class="swal2-input" placeholder="Goal Title">' +
          '<input id="swal-description" class="swal2-input" placeholder="Description">',
        focusConfirm: false,
        preConfirm: () => {
          return {
            title: document.getElementById('swal-title').value,
            description: document.getElementById('swal-description').value,
            progress: 0,
            completed: false,
          }
        },
      })

      if (formValues) {
        this.healthGoals.push(formValues)
      }
    },
    removeHealthGoal(index) {
      this.healthGoals.splice(index, 1)
    },
    toggleGoalCompletion(index) {
      this.healthGoals[index].completed = !this.healthGoals[index].completed
      this.healthGoals[index].progress = this.healthGoals[index].completed ? 100 : 0
    },
  },
})
</script>
