<template>
  <div>
    <main>
      <HeroSection />
      <TechnologySection /> <HowItWorks />
      <MainAdvantage />
      <StatisticsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import TechnologySection from '@/components/home/TechnologySection.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import StatisticsSection from '@/components/home/StatisticsSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import MainAdvantage from '@/components/home/MainAdvantage.vue'
</script>
