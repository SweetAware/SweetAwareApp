<template>
  <div class="flex space-x-4">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      @click="$emit('update:modelValue', option)"
      :class="[
        'flex-1 py-3 px-4 rounded-lg border',
        modelValue === option
          ? buttonClasses[option]
          : 'border-gray-300 text-gray-700 hover:bg-gray-50',
      ]"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Boolean],
    required: true,
  },
  buttonClasses: {
    type: Object,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>
