import { config } from '@/config'

export class NotificationService {
  constructor() {
    this.checkNotificationSupport()
    this.swRegistration = null
    this.baseUrl = config.apiBaseUrl
  }

  checkNotificationSupport() {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications')
      return false
    }
    return true
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        this.swRegistration = await navigator.serviceWorker.register('/sw.js')
        return this.swRegistration
      } catch (error) {
        console.error('Service Worker registration failed:', error)
        throw error
      }
    }
    throw new Error('Service Worker not supported')
  }

  async checkSubscription() {
    try {
      // If notifications are not supported or permission is denied, return false
      if (!this.checkNotificationSupport() || Notification.permission === 'denied') {
        return false
      }

      // Get service worker registration
      if (!this.swRegistration) {
        await this.registerServiceWorker()
      }

      // Check for active push subscription
      const subscription = await this.swRegistration.pushManager.getSubscription()
      if (!subscription) {
        return false
      }

      // Verify the subscription is still valid
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          return false
        }

        const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`

        // Check subscription status on server
        const response = await fetch(`${this.baseUrl}/notifications/check-subscription`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
          body: JSON.stringify({
            endpoint: subscription.endpoint,
          }),
        })

        if (!response.ok) {
          // If server says subscription is invalid, unsubscribe locally
          await subscription.unsubscribe()
          return false
        }

        return true
      } catch (error) {
        console.warn('Error checking subscription on server:', error)
        // If server check fails, rely on local subscription status
        return true
      }
    } catch (error) {
      console.error('Error checking subscription:', error)
      return false
    }
  }

  async getVapidPublicKey() {
    try {
      // Use the VAPID key from config instead of fetching
      return config.vapidPublicKey
    } catch (error) {
      console.error('Error getting VAPID public key:', error)
      throw error
    }
  }

  async subscribeToPushNotifications(token) {
    try {
      if (!this.swRegistration) {
        await this.registerServiceWorker()
      }

      const permission = await this.requestPermission()
      if (!permission) {
        throw new Error('Notification permission denied')
      }

      let subscription = await this.swRegistration.pushManager.getSubscription()

      // If already subscribed, unsubscribe first
      if (subscription) {
        await subscription.unsubscribe()
      }

      const publicKey = await this.getVapidPublicKey()
      const convertedKey = this.urlBase64ToUint8Array(publicKey)

      // Create new subscription
      subscription = await this.swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedKey,
      })

      // Format token properly
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`

      // Send subscription to backend
      const response = await fetch(`${this.baseUrl}/notifications/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify({
          subscription: {
            endpoint: subscription.endpoint,
            keys: {
              p256dh: this.arrayBufferToBase64(subscription.getKey('p256dh')),
              auth: this.arrayBufferToBase64(subscription.getKey('auth')),
            },
          },
        }),
      })

      if (!response.ok) {
        // If subscription fails on server, unsubscribe locally
        await subscription.unsubscribe()
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to save subscription on server')
      }

      return true
    } catch (error) {
      console.error('Error subscribing to push notifications:', error)
      throw error
    }
  }

  async unsubscribeFromPushNotifications(token) {
    try {
      if (!this.swRegistration) {
        await this.registerServiceWorker()
      }

      const subscription = await this.swRegistration.pushManager.getSubscription()
      if (!subscription) {
        // No local subscription found
        return true
      }

      // Format token properly
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`

      try {
        // Try to unsubscribe on the server first
        const response = await fetch(`${this.baseUrl}/notifications/unsubscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authToken,
          },
          body: JSON.stringify({
            endpoint: subscription.endpoint,
          }),
        })

        // If server unsubscribe fails, log it but continue with local unsubscribe
        if (!response.ok) {
          console.warn('Server unsubscribe failed, continuing with local unsubscribe')
        }
      } catch (error) {
        console.warn('Server unsubscribe failed:', error)
        // Continue with local unsubscribe even if server fails
      }

      // Always try to unsubscribe locally
      await subscription.unsubscribe()
      return true
    } catch (error) {
      console.error('Error unsubscribing from push notifications:', error)
      throw error
    }
  }

  arrayBufferToBase64(buffer) {
    if (!buffer) {
      throw new Error('Invalid subscription key')
    }
    const bytes = new Uint8Array(buffer)
    return btoa(String.fromCharCode.apply(null, bytes))
  }

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  async requestPermission() {
    if (!this.checkNotificationSupport()) return false

    try {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    } catch (error) {
      console.error('Error requesting notification permission:', error)
      return false
    }
  }

  async showNotification(title, options = {}) {
    if (!this.checkNotificationSupport()) return

    try {
      const permission = await this.requestPermission()
      if (!permission) return

      return new Notification(title, {
        requireInteraction: true,
        silent: false,
        ...options,
      })
    } catch (error) {
      console.error('Error showing notification:', error)
    }
  }
}
