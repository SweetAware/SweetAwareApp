<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Hero Section -->
    <div class="max-w-[98%] mx-auto pt-24">
      <div
        class="relative rounded-[40px] overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px] shadow-xl"
        data-aos="fade-up"
      >
        <!-- Background Image Container -->
        <div class="absolute inset-0">
          <img
            :src="heroImage"
            alt="Hero Background"
            class="w-full h-full object-cover object-center transform scale-110"
          />
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-[#E2DAF1]/60 to-transparent"></div>
        </div>

        <!-- Heart Icon -->
        <div class="absolute top-4 right-4 z-10" data-aos="fade-left" data-aos-delay="300">
          <i class="fas fa-heart text-purple-600"></i>
        </div>
        <!-- Content -->
        <div class="relative z-10 p-6 md:p-12 lg:p-20 max-w-3xl mx-4 md:ml-8 lg:ml-16">
          <div data-aos="fade-right" data-aos-delay="200">
            <span
              class="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-white text-purple-600 font-medium text-base md:text-lg"
            >
              SweetAware Health Platform
            </span>
          </div>
          <div class="mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="400">
            <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Know your health<br />condition
            </h1>
            <div class="mt-4 md:mt-6">
              <span class="text-2xl md:text-4xl text-purple-600 font-semibold inline"
                >in just a few clicks
              </span>
              <span class="text-2xl md:text-4xl text-gray-900 inline">— easy, fast and free.</span>
            </div>
          </div>
          <p
            class="mt-6 md:mt-8 text-base md:text-xl text-gray-600 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Early detection is crucial for managing diabetes. Take control of your health today with
            our AI-powered platform.
          </p>
          <div
            class="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <router-link
              to="/diagnose"
              class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-md text-white text-base md:text-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
            >
              <i class="fas fa-flask-vial mr-3 text-lg"></i>
              Diagnose Now
            </router-link>
            <router-link
              to="/about"
              class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-md text-base md:text-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Learn More
            </router-link>
          </div>
        </div>

        <!-- Science Icon -->
        <div
          class="absolute bottom-8 right-8 bg-white p-3 rounded-lg shadow-lg z-10"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <i class="fas fa-flask text-purple-600"></i>
        </div>
      </div>
    </div>
    <!-- Technology Section -->
    <div class="py-20 px-2 max-w-[98%] mx-auto">
      <!-- Innovation Label -->
      <div class="text-center mb-8" data-aos="fade-down">
        <span class="px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
          Innovation
        </span>
      </div>
      <!-- Section Title -->
      <h2
        class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Powered by Advanced Technology
      </h2>
      <p
        class="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Our platform combines cutting-edge technologies to provide the most accurate and reliable
        health assessments
      </p>

      <!-- Technology Stack Image -->
      <div
        class="technology-stack-container overflow-hidden mb-20"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <div class="technology-stack-wrapper">
          <div class="technology-stack-animation">
            <img
              src="@/assets/images/moving-technology.png"
              alt="Technology Stack"
              class="max-w-full h-auto"
            />
          </div>
          <div class="technology-stack-animation">
            <img
              src="@/assets/images/moving-technology.png"
              alt="Technology Stack"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- AI Processing -->
        <div class="text-center p-6" data-aos="fade-up" data-aos-delay="200">
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-microchip text-2xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Processing</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Our sophisticated AI algorithms process your health data using state-of-the-art machine
            learning models. By analyzing multiple health parameters simultaneously, we provide
            highly accurate diabetes risk predictions and personalized health insights tailored to
            your unique profile.
          </p>
        </div>

        <!-- Secure Database -->
        <div class="text-center p-6" data-aos="fade-up" data-aos-delay="400">
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-shield-halved text-2xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secure Database</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Your health data security is our top priority. We implement robust end-to-end
            encryption, secure authentication protocols, and industry-standard security measures to
            ensure your sensitive medical information remains completely private and protected at
            all times.
          </p>
        </div>

        <!-- Real-time Analysis -->
        <div class="text-center p-6" data-aos="fade-up" data-aos-delay="600">
          <div
            class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i class="fas fa-bolt text-2xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Real-time Analysis
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Experience immediate health insights through our dynamic analysis system. Watch as your
            health data transforms into clear, interactive visualizations and detailed reports. Get
            instant access to comprehensive health metrics, trends, and personalized recommendations
            for better health management.
          </p>
        </div>
      </div>
    </div>
    <!-- How SweetAware Works Section -->
    <div
      class="py-20 px-2 max-w-[98%] mx-auto bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <!-- Process Label -->
      <div class="text-center mb-8">
        <span
          class="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-sm font-medium"
        >
          Process
        </span>
      </div>

      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        How SweetAware Works
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        Our simple 3-step process helps you check for diabetes risk factors with professional
        accuracy
      </p>
      <!-- Process Steps -->
      <div class="relative max-w-7xl mx-auto">
        <!-- Process Image -->
        <div class="flex justify-center mb-20">
          <img
            src="@/assets/images/nurse-01.png"
            alt="Healthcare Professional"
            class="w-full max-w-4xl rounded-lg"
          />
        </div>
        <!-- Steps Timeline -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Vertical Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-800"
          ></div>
          <!-- Step 1: Fill the Form -->
          <div class="relative flex items-center mb-32" data-aos="fade-up" data-aos-delay="200">
            <div class="w-1/2 pr-8 text-right">
              <div class="text-6xl font-bold text-purple-300 dark:text-purple-700 mb-2">01</div>
              <h3 class="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                Fill the Form
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Make sure you fill in the form correctly. If you can also fill in the advanced
                section, so that the results are more accurate.
              </p>
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"
            ></div>
            <div class="w-1/2 pl-8">
              <img
                src="@/assets/images/how-to.png"
                alt="Fill Form Interface"
                class="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <!-- Step 2: Get the Result -->
          <div class="relative flex items-center mb-32" data-aos="fade-up" data-aos-delay="400">
            <div class="w-1/2 pr-8">
              <img
                src="@/assets/images/how-to-02.png"
                alt="Results Interface"
                class="w-full rounded-lg shadow-lg"
              />
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"
            ></div>
            <div class="w-1/2 pl-8">
              <div class="text-6xl font-bold text-purple-300 dark:text-purple-700 mb-2">02</div>
              <h3 class="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                Get the Result
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Wait for the results to come out. This prediction does not replace a diagnosis from
                a doctor. Use these results as an alert measure or seek immediate medical attention
                for confirmation.
              </p>
            </div>
          </div>

          <!-- Step 3: Prediction History -->
          <div class="relative flex items-center" data-aos="fade-up" data-aos-delay="600">
            <div class="w-1/2 pr-8 text-right">
              <div class="text-6xl font-bold text-purple-300 dark:text-purple-700 mb-2">03</div>
              <h3 class="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                Prediction History
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Find all the results of the predictions you have made? saved on the history page to
                see all the predictions you have made
              </p>
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"
            ></div>
            <div class="w-1/2 pl-8">
              <img
                src="@/assets/images/how-to-03.png"
                alt="Health Tracking Interface"
                class="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- Get Started Button -->
        <div class="flex justify-center mt-16">
          <router-link
            to="/diagnose"
            class="inline-flex items-center px-8 py-4 rounded-full text-white text-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
            <i class="fas fa-arrow-right ml-2"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Key Benefits Section -->
    <div class="py-20 px-2 max-w-[98%] mx-auto">
      <!-- Why Choose Us Label -->
      <div class="text-center mb-8">
        <span class="px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
          Why Choose Us
        </span>
      </div>
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Key Benefits of SweetAware
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        Our platform offers several unique advantages to help you monitor and manage your health
      </p>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Early Detection -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fas fa-calendar-check text-xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Early Detection</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Our fast and intuitive screening tool helps identify diabetes risk factors early, even
            for conditions that are often asymptomatic. Early detection allows for faster
            intervention before serious complications can occur.
          </p>
        </div>

        <!-- Free & Convenient -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fas fa-clock text-xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Free & Convenient
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Access professional-grade health screening anytime, anywhere, without cost. With just a
            few clicks, you can complete your health assessment in minutes and receive instant
            results without waiting for appointments.
          </p>
        </div>

        <!-- Health Tracking -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fas fa-chart-line text-xl text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Health Tracking</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Monitor your health progress over time with our history feature. Track improvements,
            identify patterns, and stay motivated as you make positive lifestyle changes for better
            diabetes management.
          </p>
        </div>
      </div>
      <!-- Personalized Health Guidance -->
      <div class="mt-16 bg-purple-50 dark:bg-gray-800 rounded-xl p-8 flex items-center gap-8">
        <div
          class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex-shrink-0 flex items-center justify-center"
        >
          <i class="fas fa-star text-2xl text-purple-600 dark:text-purple-400"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Personalized Health Guidance
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            SweetAware provides tailored nutrition recommendations including high-fiber, low-sugar,
            and healthy fat food options to help maintain stable blood sugar levels. Our educational
            resources empower you with knowledge to make informed health decisions for better
            diabetes prevention and management.
          </p>
        </div>
      </div>
    </div>
    <!-- Global Impact Section -->
    <div
      class="py-20 px-2 max-w-[98%] mx-auto bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <!-- Global Impact Label -->
      <div class="text-center mb-8">
        <span class="px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
          Global Impact
        </span>
      </div>
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Diabetes Around the World
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        Understanding the global impact of diabetes helps us appreciate the importance of early
        detection
      </p>

      <!-- Statistics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <!-- Statistics Column -->
        <div class="space-y-8">
          <!-- Total Cases -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <i class="fas fa-users text-blue-500 dark:text-blue-400"></i>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                  589 million
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Approximately 589 million adults (20-79 years) are living with diabetes worldwide.
                </p>
              </div>
            </div>
          </div>
          <!-- Undiagnosed Cases -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <i class="fas fa-question-circle text-purple-500 dark:text-purple-400"></i>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  43% of adults
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  An estimated 43% of adults living with diabetes (252 million people) are
                  undiagnosed.
                </p>
              </div>
            </div>
          </div>
          <!-- Deaths -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <i class="fas fa-heart-broken text-red-500 dark:text-red-400"></i>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-red-500 dark:text-red-400 mb-2">
                  3.4 million deaths
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Diabetes caused 3.4 million deaths in 2024 - that's 1 death every 9 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Image Column -->
        <div class="flex items-center justify-center">
          <img
            src="@/assets/images/illustration.png"
            alt="Diabetes Global Impact"
            class="w-full h-full object-cover rounded-xl max-w-xl"
          />
        </div>
      </div>

      <!-- Learn More Button -->
      <div class="flex justify-center mt-12">
        <router-link
          to="/education"
          class="inline-flex items-center px-8 py-4 rounded-full text-white text-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Learn More About Diabetes <i class="fas fa-arrow-right ml-2"></i>
        </router-link>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="py-20 px-2 max-w-[98%] mx-auto">
      <!-- Contact Label -->
      <div class="text-center mb-8">
        <span class="px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
          <i class="fas fa-envelope mr-2"></i> Contact Info
        </span>
      </div>
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Get in touch with us for more information
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        If you need help or have a question, we're here for you
      </p>

      <!-- Contact Form Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <!-- Image Column -->
        <div class="flex items-center justify-center">
          <img
            src="@/assets/images/contact.png"
            alt="Contact Illustration"
            class="w-full h-full object-cover max-w-xl"
          />
        </div>
        <!-- Contact Form Column -->
        <div class="bg-pink-50 dark:bg-gray-900 p-8 rounded-xl">
          <h3 class="text-2xl font-semibold mb-6 dark:text-white">Contact</h3>
          <form class="space-y-4">
            <!-- Name Input -->
            <div>
              <input
                type="text"
                placeholder="Name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <!-- Email Input -->
            <div>
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <!-- Phone Input -->
            <div>
              <input
                type="tel"
                placeholder="Phone"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <!-- Subject Input -->
            <div>
              <input
                type="text"
                placeholder="Subject"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <!-- Message Input -->
            <div>
              <textarea
                placeholder="Tell us your question"
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-gray-700 dark:bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              Send to us
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import heroImage from '../assets/images/Hero-img.png'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.bg-cover {
  background-size: 100% 100%;
}

/* Ensure the container properly clips the scaled background */
.overflow-hidden {
  isolation: isolate;
}

/* Technology Stack Animation */
.technology-stack-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.technology-stack-wrapper {
  display: flex;
  width: 200%; /* Double width to accommodate two images */
}

.technology-stack-animation {
  width: 50%; /* Each image takes half of the wrapper */
  flex-shrink: 0;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Add custom gradient if needed */
</style>
