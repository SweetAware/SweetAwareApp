<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <!-- Contact icon and title -->
      <div class="text-center mb-12">
        <div class="inline-block bg-gray-100 rounded-full p-4 mb-6">
          <img src="@/assets/images/contact-icon.png" alt="Contact Icon" class="w-80 h-16" />
        </div>
        <h2 class="text-[40px] font-semibold text-[#4B5563]">
          Get in touch with us for<br />more information
        </h2>
        <p class="text-gray-600 mt-4">if you need help or have a question, we're here for you</p>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-16 max-w-7xl mx-auto mt-16">
        <!-- Left side - Illustration -->
        <div class="md:w-1/2">
          <img
            src="@/assets/images/contact.png"
            alt="Contact Illustration"
            class="w-[120%] max-w-none"
          />
        </div>

        <!-- Right side - Contact Form -->
        <div class="md:w-1/2">
          <div class="bg-[#FFF1F1] p-10 rounded-lg shadow-sm">
            <h3 class="text-2xl font-semibold mb-8">Contact</h3>
            <form class="space-y-8">
              <div class="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-base"
                />
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-base"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  class="w-full p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-base"
                />
              </div>
              <textarea
                placeholder="Tell us your question"
                rows="5"
                class="w-full p-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-base"
              ></textarea>
              <button
                class="w-full bg-[#4B5563] text-white py-4 rounded-lg hover:bg-gray-700 transition-colors text-base font-medium"
              >
                Send to us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
