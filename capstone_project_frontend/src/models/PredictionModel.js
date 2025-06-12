import axiosInstance from '../services/AxiosService'

export class PredictionModel {
  constructor() {
    this.baseURL = 'https://sweetaware.up.railway.app/'
  }

  async createPrediction(predictionData) {
    try {
      const response = await axiosInstance.post('/api/predictions', predictionData)

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
      const response = await axiosInstance.get('/api/predictions', {
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
      const response = await axiosInstance.get(`/api/predictions/${id}`)

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
      const response = await axiosInstance.delete(`/api/predictions/${id}`)

      if (response.data.status === 'success') {
        return true
      }

      throw new Error(response.data.message)
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}
