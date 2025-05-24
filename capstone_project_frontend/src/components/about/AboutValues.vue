<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
        <p class="text-xl text-gray-600 leading-relaxed">
          The core principles that guide our mission and shape our approach to diabetes prevention.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div
          v-for="value in values"
          :key="value.title"
          class="flex flex-col md:flex-row items-start gap-6"
        >
          <div
            class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center"
          >
            <span class="text-2xl text-blue-600">{{ value.icon }}</span>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    icon: '🎯',
    title: 'Innovation',
    description:
      'We constantly push the boundaries of technology to provide cutting-edge solutions for diabetes prevention and awareness.',
  },
  {
    icon: '🤝',
    title: 'Accessibility',
    description:
      'We believe that quality healthcare information and tools should be accessible to everyone, regardless of their background.',
  },
  {
    icon: '💡',
    title: 'Education',
    description:
      'We empower individuals with knowledge and understanding to make informed decisions about their health.',
  },
  {
    icon: '❤️',
    title: 'Empathy',
    description:
      'We approach every aspect of our work with understanding and compassion for those affected by diabetes.',
  },
]
</script>
