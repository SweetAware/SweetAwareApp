// Service Worker for SweetAware
const SW_VERSION = '1.0.0'
const CACHE_NAME = `sweetaware-cache-${SW_VERSION}`

// Cache app shell files
const appShellFiles = [
  '/',
  '/index.html',
  '/src/assets/images/logo.png',
  '/src/assets/icons/low-risk.svg',
  '/src/assets/icons/moderate-risk.svg',
  '/src/assets/icons/high-risk.svg',
]

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...')
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell...')
      return cache.addAll(appShellFiles)
    }),
  )
  // Ensure new service worker activates immediately
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...')
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key)
            return caches.delete(key)
          }
        }),
      )
    }),
  )
  // Take control of all pages immediately
  return self.clients.claim()
})

self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received:', event)

  if (!event.data) {
    console.log('[Service Worker] Push event has no data')
    return
  }

  try {
    const data = event.data.json()
    console.log('[Service Worker] Push data:', data)

    let notificationTitle = data.title || 'SweetAware Notification'
    let notificationOptions = {
      body: data.body || 'You have a new notification',
      icon: '/src/assets/images/logo.png',
      badge: '/src/assets/images/logo.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || '/',
        ...data.data,
      },
      requireInteraction: true,
      actions: data.actions || [],
    }

    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions))
  } catch (err) {
    console.error('[Service Worker] Error showing notification:', err)
  }
})

self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click received')

  event.notification.close()

  const urlToOpen = event.notification.data?.url || '/'

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then((clientList) => {
        for (let client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus()
          }
        }
        return clients.openWindow(urlToOpen)
      }),
  )
})

// Handle fetch events - network first, falling back to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If the response was good, clone it and store it in the cache
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // If the network request failed, try to get it from the cache
        return caches.match(event.request)
      }),
  )
})
