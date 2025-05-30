<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <WelcomeHeader />
          <DiagnoseForm @submit="handleSubmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/diagnose/Sidebar.vue'
import WelcomeHeader from '@/components/diagnose/WelcomeHeader.vue'
import DiagnoseForm from '@/components/diagnose/DiagnoseForm.vue'

const handleSubmit = (formData) => {
  console.log('Form submitted:', formData)
  // TODO: Implement the prediction logic or API call
}
</script>
