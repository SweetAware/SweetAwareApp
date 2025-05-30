<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-start gap-8">
        <!-- Left side - Statistics -->
        <div class="md:w-1/2">
          <h2 class="text-2xl font-semibold mb-8">Diabetes around the world</h2>

          <div class="mb-6">
            <h3 class="text-[32px] font-medium text-[#4E9CC9]">589 million</h3>
            <p class="text-gray-600 text-lg">
              Approximately 589 million adults<br />
              (20-79 years) are living with diabetes.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-[32px] font-medium text-[#9747FF]">43% of adults</h3>
            <p class="text-gray-600 text-lg">
              An estimated 43% of adults living with<br />
              diabetes (252 million people) are<br />
              undiagnosed.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-[32px] font-medium text-[#D92D20]">3.4 million deaths</h3>
            <p class="text-gray-600 text-lg">
              Diabetes caused 3.4 million deaths in 2024<br />
              1 every 9 seconds.
            </p>
          </div>

          <button class="bg-[#4B5563] text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            View the data
          </button>
        </div>

        <!-- Right side - Images -->
        <div class="md:w-1/2 flex flex-wrap gap-4 justify-end">
          <img
            src="@/assets/images/illustration.png"
            alt="Diabetes Statistics Illustrations"
            class="max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
