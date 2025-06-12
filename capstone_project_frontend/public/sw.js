// Service Worker for SweetAware
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js')

const { registerRoute } = workbox.routing
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies
const { CacheableResponsePlugin } = workbox.cacheableResponse
const { ExpirationPlugin } = workbox.expiration
const { precacheAndRoute } = workbox.precaching

// Precache all assets listed in manifest
precacheAndRoute(self.__WB_MANIFEST || [])

// Cache page navigations (HTML)
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
)

// Cache CSS, JS, and Web Worker files
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
)

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
)

// Cache API requests
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 12 * 60 * 60, // 12 hours
      }),
    ],
  }),
)

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

// Cache additional external resources
registerRoute(
  ({ url }) => url.origin === 'https://cdnjs.cloudflare.com',
  new CacheFirst({
    cacheName: 'cdn-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
)
