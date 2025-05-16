<script setup>
import FeatureCard from '../components/FeatureCard.vue'

const features = [
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Fast Performance',
    description: 'Experience lightning-fast performance with our optimized platform.',
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: 'Secure Data',
    description: 'Your health data is protected with industry-leading security measures.',
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Easy Customization',
    description: 'Customize your experience with flexible settings and options.',
  },
]
</script>

<template>
  <!-- Hero Section -->
  <div class="bg-gradient-to-br from-purple-600 to-purple-900 py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-4">Welcome to SweetAware</h2>
      <p class="text-purple-100 mb-8 max-w-2xl mx-auto">
        Discover a better way to manage your health with our innovative solutions.
      </p>
      <button
        class="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300 shadow-lg"
      >
        Get Started
      </button>
    </div>
  </div>

  <!-- Features Section -->
  <div class="container mx-auto py-16 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </div>
</template>
