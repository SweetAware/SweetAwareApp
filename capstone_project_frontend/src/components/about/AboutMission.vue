<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p class="text-xl text-gray-600 leading-relaxed">
          We strive to make diabetes prevention accessible to everyone through early detection,
          education, and personalized health insights.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in missionItems"
          :key="index"
          class="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="text-blue-600 mb-4">
            <component :is="item.icon" class="w-12 h-12" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const HeartIcon = defineComponent({
  render: () =>
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': '2',
      class: 'w-6 h-6',
      innerHTML:
        '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />',
    }),
})

const BrainIcon = defineComponent({
  render: () =>
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': '2',
      innerHTML:
        '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />',
    }),
})

const ShieldIcon = defineComponent({
  render: () =>
    h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': '2',
      innerHTML:
        '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />',
    }),
})

const missionItems = [
  {
    icon: HeartIcon,
    title: 'Early Detection',
    description:
      'We provide advanced tools and algorithms to help identify potential diabetes risk factors early.',
  },
  {
    icon: BrainIcon,
    title: 'Smart Technology',
    description:
      'Leveraging AI and machine learning to deliver personalized health insights and recommendations.',
  },
  {
    icon: ShieldIcon,
    title: 'Prevention First',
    description:
      'Empowering individuals with knowledge and tools to prevent diabetes through lifestyle changes.',
  },
]
</script>
