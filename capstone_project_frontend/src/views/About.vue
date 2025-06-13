<!-- # SweetAware - About Us -->

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16 pt-12" data-aos="fade-down">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">About SweetAware</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Empowering individuals to take control of their health through advanced diabetes risk
          prediction and comprehensive health management.
        </p>
      </div>

      <!-- Mission & Vision Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="flex items-center mb-4">
            <i class="fas fa-bullseye text-2xl text-purple-600 mr-4"></i>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            To provide accessible, accurate, and early diabetes risk assessment through artificial
            intelligence, helping people make informed decisions about their health before
            complications arise.
          </p>
        </div>
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="flex items-center mb-4">
            <i class="fas fa-eye text-2xl text-purple-600 mr-4"></i>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            To create a world where diabetes is detected early and managed effectively, reducing its
            impact on global health through technology and education.
          </p>
        </div>
      </div>

      <!-- Key Features Section -->
      <div class="mb-16">
        <h2
          class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          data-aos="fade-up"
        >
          Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mx-auto mb-4"
            >
              <i class="fas fa-brain"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              AI-Powered Prediction
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center">
              Advanced machine learning algorithms analyze your health data to provide accurate
              diabetes risk assessments.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mx-auto mb-4"
            >
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Health Tracking
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center">
              Monitor your health metrics over time and track your progress towards better health
              outcomes.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mx-auto mb-4"
            >
              <i class="fas fa-book-medical"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Educational Resources
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-center">
              Access comprehensive information about diabetes prevention, management, and healthy
              lifestyle choices.
            </p>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div
        class="bg-purple-600 rounded-lg shadow-lg p-8 mb-16"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 class="text-3xl font-bold text-white text-center mb-8">Diabetes Statistics</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">537M</div>
            <p class="text-purple-200">Adults living with diabetes worldwide</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">50%</div>
            <p class="text-purple-200">People undiagnosed with diabetes</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">6.7M</div>
            <p class="text-purple-200">Deaths due to diabetes annually</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">$966B</div>
            <p class="text-purple-200">Annual global healthcare spending</p>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/src/assets/images/profile.jpg"
              alt="Team Member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dr. Jane Smith</h3>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Medical Director</p>
            <p class="text-gray-600 dark:text-gray-400">
              Specialist in diabetes care with 15 years of experience
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/src/assets/images/profile.jpg"
              alt="Team Member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">John Davis</h3>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Lead Developer</p>
            <p class="text-gray-600 dark:text-gray-400">
              AI specialist with expertise in healthcare technology
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/src/assets/images/profile.jpg"
              alt="Team Member"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sarah Johnson</h3>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Health Educator</p>
            <p class="text-gray-600 dark:text-gray-400">
              Certified diabetes educator and nutritionist
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Have questions about SweetAware? We're here to help!
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          Contact Us
          <i class="fas fa-arrow-right ml-2"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
