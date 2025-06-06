import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { useDarkModeStore } from './stores/darkMode'

// Add Font Awesome CDN link
const fontAwesome = document.createElement('link')
fontAwesome.rel = 'stylesheet'
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(fontAwesome)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize dark mode
const darkModeStore = useDarkModeStore()
darkModeStore.initDarkMode()

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful')
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err)
      })
  })
}

app.mount('#app')
