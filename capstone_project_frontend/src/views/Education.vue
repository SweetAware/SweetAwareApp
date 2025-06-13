# Edukasi Diabetes - SweetAware

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16 pt-12" data-aos="fade-down">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Diabetes Education Center
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Your comprehensive resource for understanding diabetes, its prevention, and management.
        </p>
      </div>

      <!-- Quick Links Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="(section, index) in quickLinks"
          :key="index"
          @click="scrollToSection(section.id)"
          class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 border-2 hover:border-purple-500"
          :data-aos="'fade-right'"
          :data-aos-delay="100 * (index + 1)"
        >
          <i :class="section.icon + ' text-purple-600'"></i>
          <span class="font-medium text-gray-900 dark:text-white">{{ section.title }}</span>
        </button>
      </div>

      <!-- Learning Modules Section -->
      <div id="learning-modules" class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8" data-aos="fade-up">
          Learning Modules
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(module, index) in learningModules"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            :data-aos="'zoom-in'"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="h-48 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <i :class="module.icon + ' text-6xl text-purple-600 dark:text-purple-400'"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ module.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ module.description }}
              </p>
              <button
                @click="startModule(module)"
                class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Tools Section -->
      <div id="interactive-tools" class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8" data-aos="fade-up">
          Interactive Tools
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Carbohydrate Counter
            </h3>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Select Food Item:</label>
              <select v-model="selectedFood" class="w-full p-2 border rounded-md dark:bg-gray-700">
                <option v-for="food in foodItems" :key="food.id" :value="food">
                  {{ food.name }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2"
                >Portion Size (grams):</label
              >
              <input
                type="number"
                v-model="portionSize"
                class="w-full p-2 border rounded-md dark:bg-gray-700"
              />
            </div>
            <div class="bg-purple-100 dark:bg-purple-900 p-4 rounded-md">
              <p class="text-purple-800 dark:text-purple-200">
                Total Carbs: {{ calculateCarbs }} g
              </p>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Blood Sugar Log
            </h3>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Blood Sugar Level:</label>
              <input
                type="number"
                v-model="bloodSugar"
                class="w-full p-2 border rounded-md dark:bg-gray-700"
                placeholder="mg/dL"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Time:</label>
              <select
                v-model="measurementTime"
                class="w-full p-2 border rounded-md dark:bg-gray-700"
              >
                <option value="before-breakfast">Before Breakfast</option>
                <option value="after-breakfast">After Breakfast</option>
                <option value="before-lunch">Before Lunch</option>
                <option value="after-lunch">After Lunch</option>
                <option value="before-dinner">Before Dinner</option>
                <option value="after-dinner">After Dinner</option>
                <option value="bedtime">Bedtime</option>
              </select>
            </div>
            <button
              @click="logBloodSugar"
              class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Log Reading
            </button>
          </div>
        </div>
      </div>

      <!-- Resources Section -->
      <div id="resources" class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Helpful Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            v-for="(resource, index) in resources"
            :key="index"
            :href="resource.url"
            target="_blank"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <i :class="resource.icon + ' text-2xl text-purple-600 mr-4'"></i>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ resource.title }}
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">{{ resource.description }}</p>
          </a>
        </div>
      </div>

      <!-- FAQ Section -->
      <div id="faq" class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <button
              @click="faq.isOpen = !faq.isOpen"
              class="w-full px-6 py-4 text-left flex justify-between items-center"
            >
              <span class="font-medium text-gray-900 dark:text-white">{{ faq.question }}</span>
              <i
                :class="[
                  'fas',
                  faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down',
                  'text-purple-600',
                ]"
              ></i>
            </button>
            <div v-show="faq.isOpen" class="px-6 pb-4">
              <p class="text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Education',
  setup() {
    const quickLinks = [
      { id: 'learning-modules', title: 'Learning Modules', icon: 'fas fa-book' },
      { id: 'interactive-tools', title: 'Interactive Tools', icon: 'fas fa-tools' },
      { id: 'resources', title: 'Resources', icon: 'fas fa-link' },
      { id: 'faq', title: 'FAQ', icon: 'fas fa-question-circle' },
    ]

    const learningModules = [
      {
        title: 'Understanding Diabetes',
        description: 'Learn about different types of diabetes, causes, and risk factors.',
        icon: 'fas fa-book-medical',
      },
      {
        title: 'Healthy Living',
        description: 'Discover lifestyle changes, diet tips, and exercise recommendations.',
        icon: 'fas fa-heart',
      },
      {
        title: 'Managing Diabetes',
        description:
          'Learn about medication, monitoring blood sugar, and preventing complications.',
        icon: 'fas fa-clipboard-check',
      },
    ]

    const resources = [
      {
        title: 'Diet Guidelines',
        description: 'Comprehensive guide for diabetes-friendly meal planning.',
        icon: 'fas fa-utensils',
        url: '#',
      },
      {
        title: 'Exercise Plans',
        description: 'Safe and effective workout routines for diabetics.',
        icon: 'fas fa-running',
        url: '#',
      },
      {
        title: 'Support Groups',
        description: 'Connect with others in the diabetes community.',
        icon: 'fas fa-users',
        url: '#',
      },
    ]

    const faqs = ref([
      {
        question: 'What are the early signs of diabetes?',
        answer:
          'Early signs include increased thirst, frequent urination, unexplained weight loss, extreme hunger, blurred vision, fatigue, and slow-healing sores.',
        isOpen: false,
      },
      {
        question: 'How often should I check my blood sugar?',
        answer:
          'The frequency depends on your type of diabetes and treatment plan. Typically, Type 1 diabetics check 4-10 times daily, while Type 2 diabetics might check less frequently.',
        isOpen: false,
      },
      {
        question: 'What foods should I avoid with diabetes?',
        answer:
          'Generally, limit sugary foods, refined carbohydrates, sweetened beverages, and foods high in saturated fats. Always consult your healthcare provider for personalized advice.',
        isOpen: false,
      },
    ])

    // Interactive Tools Data
    const selectedFood = ref(null)
    const portionSize = ref(100)
    const foodItems = [
      { id: 1, name: 'White Rice', carbsPer100g: 28 },
      { id: 2, name: 'Apple', carbsPer100g: 14 },
      { id: 3, name: 'Bread', carbsPer100g: 49 },
      { id: 4, name: 'Potato', carbsPer100g: 17 },
    ]

    const calculateCarbs = computed(() => {
      if (!selectedFood.value) return 0
      return ((selectedFood.value.carbsPer100g * portionSize.value) / 100).toFixed(1)
    })

    const bloodSugar = ref('')
    const measurementTime = ref('before-breakfast')

    const logBloodSugar = () => {
      // Implement blood sugar logging logic here
      console.log('Logging blood sugar:', {
        level: bloodSugar.value,
        time: measurementTime.value,
        date: new Date(),
      })
      // Reset form
      bloodSugar.value = ''
      measurementTime.value = 'before-breakfast'
    }

    const scrollToSection = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const startModule = (module) => {
      // Implement module navigation logic here
      console.log('Starting module:', module.title)
      // You can add navigation or modal opening logic here
    }

    return {
      quickLinks,
      learningModules,
      resources,
      faqs,
      selectedFood,
      portionSize,
      foodItems,
      calculateCarbs,
      bloodSugar,
      measurementTime,
      logBloodSugar,
      scrollToSection,
      startModule,
    }
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
