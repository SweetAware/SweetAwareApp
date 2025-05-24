<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-2">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
