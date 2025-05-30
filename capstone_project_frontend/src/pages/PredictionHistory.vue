<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-8">Prediction History</h1>
          <!-- We'll implement the history table later -->
          <p class="text-gray-600">Your prediction history will appear here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/diagnose/Sidebar.vue'
</script>
