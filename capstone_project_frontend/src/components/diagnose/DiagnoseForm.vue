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
          />
        </FormField>

        <FormField label="Blood Glucose Level">
          <input
            v-model="formData.bloodGlucose"
            type="number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blood glucose level"
          />
        </FormField>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Hypertension">
          <ToggleButtons
            :options="['Yes', 'No']"
            v-model="formData.hypertension"
            :button-classes="{
              Yes: 'bg-red-100 border-red-500 text-red-700',
              No: 'bg-green-100 border-green-500 text-green-700',
            }"
          />
        </FormField>

        <FormField label="Heart Disease">
          <ToggleButtons
            :options="['Yes', 'No']"
            v-model="formData.heartDisease"
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
            v-model="formData.hba1c"
            type="number"
            step="0.1"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter HbA1c level"
          />
        </FormField>

        <FormField label="Smoking History">
          <ToggleButtons
            :options="['Never', 'Former', 'Current']"
            v-model="formData.smokingHistory"
            :button-classes="{
              Never: 'bg-blue-100 border-blue-500 text-blue-700',
              Former: 'bg-blue-100 border-blue-500 text-blue-700',
              Current: 'bg-blue-100 border-blue-500 text-blue-700',
            }"
          />
        </FormField>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-medium transition-colors mt-8"
      >
        Predict
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormField from './FormField.vue'
import ToggleButtons from './ToggleButtons.vue'
import { useAuth } from '@/stores/auth'

const { isLoggedIn } = useAuth()
const showLoginModal = ref(false)

const formData = ref({
  age: '',
  gender: 'Male',
  bmi: '',
  bloodGlucose: '',
  hypertension: null,
  heartDisease: null,
  hba1c: '',
  smokingHistory: null,
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  if (!isLoggedIn.value) {
    showLoginModal.value = true
    return
  }

  emit('submit', formData.value)
}
</script>
