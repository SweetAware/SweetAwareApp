<template>
  <section class="relative">
    <div
      class="relative rounded-[32px] mx-4 my-6 overflow-hidden min-h-[500px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <!-- Content overlay -->
      <div class="relative z-10 w-full h-full">
        <div class="container mx-auto px-12 py-20">
          <div class="max-w-xl">
            <h1 class="text-[40px] leading-tight font-bold text-black mb-8">
              Know your health condition<br />
              in just a few clicks-easy, fast<br />
              and free.
            </h1>
            <router-link
              to="/diagnose"
              class="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 font-medium inline-block"
            >
              Diagnose Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/images/Hero-img.png'
</script>
