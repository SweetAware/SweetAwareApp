<template>
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
</template>

<script setup>
import { ref } from 'vue'
import FormField from './FormField.vue'
import ToggleButtons from './ToggleButtons.vue'

const formData = ref({
  age: '',
  gender: null,
  bmi: '',
  bloodGlucose: '',
  hypertension: null,
  heartDisease: null,
  hba1c: '',
  smokingHistory: null,
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>
