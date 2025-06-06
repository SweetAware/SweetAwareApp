import axios from 'axios'

export class AuthModel {
  constructor() {
    this.baseURL = 'https://sweetaware-production.up.railway.app'
  }

  async login(credentials) {
    try {
      const response = await axios.post(`${this.baseURL}/api/auth/login`, credentials)

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
      const response = await axios.post(`${this.baseURL}/api/auth/register`, credentials)

      if (response.data.status === 'success') {
        // Store user data after successful registration and auto-login
        localStorage.setItem('user', JSON.stringify(response.data.data))
        return response.data
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error
    }
  }

  async refreshToken() {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.post(
        `${this.baseURL}/api/auth/refresh-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

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
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.get(`${this.baseURL}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data.status === 'success') {
        return response.data.data.user
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
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
