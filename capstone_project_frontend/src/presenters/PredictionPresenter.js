import { PredictionModel } from '../models/PredictionModel'

/**
 * Presenter class for handling prediction-related business logic
 */
export class PredictionPresenter {
  constructor(view) {
    this.view = view
    this.model = new PredictionModel()
  }

  async createPrediction(predictionData) {
    try {
      this.view.setLoading(true)
      const result = await this.model.createPrediction(predictionData)
      this.view.setLoading(false)
      this.view.showSuccess('Prediction created successfully')
      return result
    } catch (error) {
      this.view.setLoading(false)
      this.view.showError(error.message || 'Failed to create prediction')
      throw error
    }
  }
  async getPredictionHistory() {
    try {
      this.view.setLoading(true)
      const predictions = await this.model.getPredictionHistory()
      this.view.setLoading(false)
      return predictions
    } catch (error) {
      this.view.setLoading(false)
      this.view.showError(error.message || 'Failed to fetch prediction history')
      throw error
    }
  }

  /**
   * Get a specific prediction by ID
   * @param {string} id The ID of the prediction to retrieve
   * @returns {Promise<Object>} The prediction data
   */
  async getPredictionById(id) {
    try {
      this.view.setLoading(true)
      const prediction = await this.model.getPredictionById(id)
      this.view.setLoading(false)
      return prediction
    } catch (error) {
      this.view.setLoading(false)
      this.view.showError(error.message || 'Failed to fetch prediction details')
      throw error
    }
  }

  /**
   * Delete a prediction by ID
   * @param {string} id The ID of the prediction to delete
   */ async deletePrediction(id) {
    try {
      this.view.setLoading(true)
      await this.model.deletePrediction(id)
      this.view.setLoading(false)
    } catch (error) {
      this.view.setLoading(false)
      this.view.showError(error.message || 'Failed to delete prediction')
      throw error
    }
  }
}
