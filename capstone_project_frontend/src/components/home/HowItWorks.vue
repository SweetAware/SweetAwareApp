<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-semibold">How it works</h2>
        <p class="text-gray-600 mt-2">
          A quick guide on how to predict your diabetes with SweetAware
        </p>
        <img src="@/assets/images/nurse-01.png" alt="Nurse" class="w-[800px] mx-auto mt-4" />
      </div>

      <div class="relative flex flex-col space-y-32">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        <!-- Fill the Form -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-12 text-right">
            <h3 class="text-xl font-semibold mb-2">Fill the Form</h3>
            <p class="text-gray-600">
              Make sure you fill in the form carefully. If you can add all the requested scores,
              then the result will be more accurate.
            </p>
          </div>
          <!-- Dot on timeline -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"
          ></div>
          <div class="w-1/2 pl-12">
            <img
              src="@/assets/images/how-to.png"
              alt="Fill Form Screenshot"
              class="w-[80%] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Get the Result -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-12">
            <img
              src="@/assets/images/how-to-02.png"
              alt="Get Result Screenshot"
              class="w-[80%] mx-auto rounded-lg shadow-lg"
            />
          </div>
          <!-- Dot on timeline -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"
          ></div>
          <div class="w-1/2 pl-12">
            <h3 class="text-xl font-semibold mb-2">Get the Result</h3>
            <p class="text-gray-600">
              Wait for the results to come out. This prediction does not replace a diagnosis but
              gives you an initial reference and seek medical attention for confirmation.
            </p>
          </div>
        </div>

        <!-- Prediction History -->
        <div class="relative flex items-center">
          <div class="w-1/2 pr-12 text-right">
            <h3 class="text-xl font-semibold mb-2">Prediction History</h3>
            <p class="text-gray-600">
              You can check your prediction history directly on the history page to see all the
              predictions you have made.
            </p>
          </div>
          <!-- Dot on timeline -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"
          ></div>
          <div class="w-1/2 pl-12">
            <img
              src="@/assets/images/how-to-03.png"
              alt="Prediction History Screenshot"
              class="w-[80%] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
