import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(false)

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.value)
  }

  // Initialize dark mode from localStorage
  function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      isDarkMode.value = true
      document.documentElement.classList.add('dark')
    }
  }

  return { isDarkMode, toggleDarkMode, initDarkMode }
})
