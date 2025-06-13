import axiosInstance from '../services/AxiosService'

export class AuthModel {
  constructor() {
    this.baseURL = 'https://sweetaware.up.railway.app/'
  }
  async login(credentials) {
    try {
      const response = await axiosInstance.post('/api/auth/login', credentials)

      if (response.data.status === 'success') {
        // Store the token
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.data.user))
        return response.data
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
  async register(credentials) {
    try {
      const response = await axiosInstance.post('/api/auth/register', credentials)

      if (response.data.status === 'success') {
        // Store user data after successful registration and auto-login
        localStorage.setItem('user', JSON.stringify(response.data.data))
        return response.data
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
  async refreshToken() {
    try {
      const response = await axiosInstance.post('/api/auth/refresh-token')

      if (response.data.status === 'success') {
        localStorage.setItem('token', response.data.data.token)
        return response.data
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }

  async getProfile() {
    try {
      const response = await axiosInstance.get('/api/auth/profile')

      if (response.data.status === 'success') {
        return response.data.data.user
      }

      throw new Error(response.data.message)
    } catch (error) {
      if (error.response?.status === 401) {
        // Handle unauthorized access - token might be expired
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        throw new Error('Session expired. Please login again.')
      }
      throw error.response?.data?.message || error.message || 'Failed to load profile'
    }
  }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
