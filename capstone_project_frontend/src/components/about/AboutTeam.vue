<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
        <p class="text-xl text-gray-600 leading-relaxed">
          Meet the passionate individuals behind SweetAware who are dedicated to making a difference
          in diabetes prevention.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ member.name }}</h3>
            <p class="text-blue-600 mb-4">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    description:
      'With over 15 years of experience in diabetes research and treatment, Dr. Chen leads our medical strategy.',
    image: '/src/assets/images/nurse-01.png',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Tech Lead',
    description:
      'A passionate technologist dedicated to building accessible healthcare solutions through innovation.',
    image: '/src/assets/images/profil.jpg',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Research Director',
    description:
      'Specializing in preventive medicine, Dr. Wilson drives our research initiatives and clinical partnerships.',
    image: '/src/assets/images/nurse-01.png',
  },
]
</script>
