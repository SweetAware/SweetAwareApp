// File for handling ML model operations
const predictionModel = require("./predictionModel");

/**
 * Service for handling diabetes prediction operations
 */
class DiabetesPredictionService {
  /**
   * Initializes the machine learning model
   */
  static async initialize() {
    return await predictionModel.initModel();
  }

  /**
   * Makes a prediction based on user input data
   * @param {Object} inputData - User input data for prediction
   * @returns {Object} - Prediction result with risk assessment
   */
  static async makePrediction(inputData) {
    try {
      return await predictionModel.predict(inputData);
    } catch (error) {
      console.error("Error making prediction:", error);
      throw error;
    }
  }

  /**
   * Provides recommendations based on prediction results
   * @param {Object} predictionResult - Result of the prediction
   * @returns {Object} - Recommendations for the user
   */
  static getRecommendations(predictionResult) {
    const { prediction, details } = predictionResult;
    const recommendations = {
      lifestyle: [],
      monitoring: [],
      consultation: [],
    };

    // General recommendations for all
    recommendations.lifestyle.push(
      "Maintain a balanced diet rich in vegetables and fruits"
    );
    recommendations.lifestyle.push(
      "Regular physical activity (at least 150 minutes per week)"
    );
    recommendations.monitoring.push("Regular blood glucose monitoring");

    // Risk-specific recommendations
    if (prediction === "High Risk") {
      recommendations.monitoring.push(
        "Check blood glucose levels at least twice daily"
      );
      recommendations.consultation.push(
        "Schedule an appointment with an endocrinologist"
      );
      recommendations.lifestyle.push("Consider a low-carbohydrate diet");
    } else if (prediction === "Moderate Risk") {
      recommendations.monitoring.push("Check blood glucose levels weekly");
      recommendations.consultation.push(
        "Follow up with your primary care physician"
      );
    } else {
      recommendations.monitoring.push("Check blood glucose levels monthly");
    }

    // Factor-specific recommendations
    const factors = details.factors;
    if (factors.bmi === "Overweight") {
      recommendations.lifestyle.push(
        "Work towards achieving a healthy weight through diet and exercise"
      );
    }

    if (factors.bloodGlucoseLevel === "High") {
      recommendations.lifestyle.push(
        "Reduce intake of simple carbohydrates and sugary foods"
      );
      recommendations.monitoring.push(
        "Monitor blood glucose levels more frequently"
      );
    }

    if (factors.hbA1cLevel === "Elevated") {
      recommendations.consultation.push(
        "Discuss HbA1c management with your healthcare provider"
      );
    }

    return recommendations;
  }
}

module.exports = DiabetesPredictionService;
