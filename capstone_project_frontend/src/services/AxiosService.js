import axios from 'axios'
import { AuthModel } from '../models/AuthModel'

const baseURL = 'https://sweetaware.up.railway.app/'

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

// Add request interceptor to add token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error is not 401 or the request was for refresh token, reject immediately
    if (
      !error.response ||
      error.response.status !== 401 ||
      originalRequest.url === '/api/auth/refresh-token' ||
      originalRequest._retry
    ) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    try {
      // Try to refresh the token
      const authModel = new AuthModel()
      const response = await authModel.refreshToken()

      if (response?.data?.token) {
        // Store the new token
        localStorage.setItem('token', response.data.token)

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${response.data.token}`
        return axiosInstance(originalRequest)
      }
    } catch (refreshError) {
      // If refresh fails, clear tokens and redirect to login
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
      return Promise.reject(refreshError)
    }
  },
)

export default axiosInstance
