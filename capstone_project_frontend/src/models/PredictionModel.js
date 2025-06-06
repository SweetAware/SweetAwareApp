import axios from 'axios'

export class PredictionModel {
  constructor() {
    this.baseURL = 'https://sweetaware-production.up.railway.app'
  }

  async createPrediction(predictionData) {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.post(`${this.baseURL}/api/predictions`, predictionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data.status === 'success') {
        return response.data.data
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }

  async getPredictionHistory(page = 1, limit = 10) {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.get(`${this.baseURL}/api/predictions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          limit: 1000, // Get all predictions at once
        },
      })

      if (response.data.status === 'success') {
        return response.data.data.predictions
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }

  async getPredictionById(id) {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.get(`${this.baseURL}/api/predictions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data.status === 'success') {
        return response.data.data.prediction
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }

  async deletePrediction(id) {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.delete(`${this.baseURL}/api/predictions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data.status === 'success') {
        return true
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}
