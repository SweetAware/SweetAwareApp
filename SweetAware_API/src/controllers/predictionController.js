const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const Prediction = require("../models/Prediction");

// Validation schemas
const predictionValidation = Joi.object({
  gender: Joi.string().valid("Male", "Female").required(),
  age: Joi.number().required(),
  hypertension: Joi.boolean().required(),
  heartDisease: Joi.boolean().required(),
  smokingHistory: Joi.string().valid("never", "former", "current").required(),
  bmi: Joi.number().required(),
  hbA1cLevel: Joi.number().required(),
  bloodGlucoseLevel: Joi.number().required(),
});

// Create a new prediction
const createPrediction = async (request, h) => {
  try {
    const { error } = predictionValidation.validate(request.payload);
    if (error) {
      return h
        .response({
          status: "error",
          message: error.details[0].message,
        })
        .code(400);
    }

    // Get input data
    const inputData = request.payload;

    // In a real-world scenario, you would call a machine learning model here
    // For now, we'll mock a prediction result
    const mockPrediction = {
      prediction: Math.random() > 0.5 ? "High Risk" : "Low Risk",
      probability: Math.random(),
      details: {
        factors: {
          bloodGlucoseLevel:
            inputData.bloodGlucoseLevel > 140 ? "High" : "Normal",
          hbA1cLevel: inputData.hbA1cLevel > 6.5 ? "Elevated" : "Normal",
          bmi: inputData.bmi > 25 ? "Overweight" : "Normal",
          hypertension: inputData.hypertension ? "Present" : "Absent",
          heartDisease: inputData.heartDisease ? "Present" : "Absent",
        },
      },
    };

    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Mock response for development without database
      console.log("Using mock data - database not connected");
      return h
        .response({
          status: "success",
          message: "Prediction created successfully (MOCK - No DB)",
          data: {
            id: `mock-${Date.now()}`,
            inputData: inputData,
            result: mockPrediction,
            createdAt: new Date(),
          },
        })
        .code(201);
    }

    // Create and save prediction record
    const prediction = new Prediction({
      user: request.auth.credentials.id,
      inputData: inputData,
      result: mockPrediction,
    });

    await prediction.save();

    return h
      .response({
        status: "success",
        message: "Prediction created successfully",
        data: {
          id: prediction._id,
          inputData: prediction.inputData,
          result: prediction.result,
          createdAt: prediction.createdAt,
        },
      })
      .code(201);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: error.message,
      })
      .code(500);
  }
};

// Get prediction history for a user
const getPredictionHistory = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Generate mock prediction history
      console.log("Using mock data - database not connected");

      // Create some mock predictions
      const mockPredictions = Array(5)
        .fill()
        .map((_, i) => ({
          _id: `mock-${i}-${Date.now()}`,
          inputData: {
            glucose: 110 + Math.floor(Math.random() * 70),
            bloodPressure: 70 + Math.floor(Math.random() * 40),
            skinThickness: 20 + Math.floor(Math.random() * 15),
            insulin: 50 + Math.floor(Math.random() * 100),
            bmi: 22 + Math.random() * 10,
            age: 25 + Math.floor(Math.random() * 40),
          },
          result: {
            prediction: Math.random() > 0.5 ? "High Risk" : "Low Risk",
            probability: Math.random(),
            details: { factors: {} },
          },
          createdAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000), // Each one day apart
          user: userId,
        }));

      return h
        .response({
          status: "success",
          data: {
            predictions: mockPredictions,
            pagination: {
              total: mockPredictions.length,
              page: 1,
              limit: 10,
              pages: 1,
            },
          },
        })
        .code(200);
    }

    const predictions = await Prediction.find({ user: userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Prediction.countDocuments({ user: userId });

    return h
      .response({
        status: "success",
        data: {
          predictions,
          pagination: {
            total,
            page,
            limit,
            pages: Math.ceil(total / limit),
          },
        },
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: error.message,
      })
      .code(500);
  }
};

// Get single prediction by ID
const getPredictionById = async (request, h) => {
  try {
    const predictionId = request.params.id;
    const userId = request.auth.credentials.id;

    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Generate mock prediction
      console.log("Using mock data - database not connected");

      // Check if the ID starts with mock- to maintain consistency with mock data
      if (
        !predictionId.startsWith("mock-") &&
        predictionId !== "60d21b4667d0d8992e610c85"
      ) {
        return h
          .response({
            status: "error",
            message: "Prediction not found",
          })
          .code(404);
      }

      const mockPrediction = {
        _id: predictionId,
        inputData: {
          glucose: 140,
          bloodPressure: 80,
          skinThickness: 25,
          insulin: 120,
          bmi: 24.5,
          age: 45,
        },
        result: {
          prediction: "High Risk",
          probability: 0.75,
          details: {
            factors: {
              glucose: "High",
              bloodPressure: "Normal",
              bmi: "Normal",
            },
          },
        },
        createdAt: new Date(),
        user: userId,
      };

      return h
        .response({
          status: "success",
          data: {
            prediction: mockPrediction,
          },
        })
        .code(200);
    }

    const prediction = await Prediction.findOne({
      _id: predictionId,
      user: userId,
    });

    if (!prediction) {
      return h
        .response({
          status: "error",
          message: "Prediction not found",
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        data: {
          prediction,
        },
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: error.message,
      })
      .code(500);
  }
};

// Delete a prediction by ID
const deletePrediction = async (request, h) => {
  try {
    const predictionId = request.params.id;
    const userId = request.auth.credentials.id;

    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Mock response for development without database
      console.log("Using mock data - database not connected");

      if (
        !predictionId.startsWith("mock-") &&
        predictionId !== "60d21b4667d0d8992e610c85"
      ) {
        return h
          .response({
            status: "error",
            message: "Prediction not found",
          })
          .code(404);
      }

      return h
        .response({
          status: "success",
          message: "Prediction deleted successfully (MOCK - No DB)",
        })
        .code(200);
    }

    // Find and delete the prediction
    const prediction = await Prediction.findOneAndDelete({
      _id: predictionId,
      user: userId,
    });

    if (!prediction) {
      return h
        .response({
          status: "error",
          message:
            "Prediction not found or you don't have permission to delete it",
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        message: "Prediction deleted successfully",
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: error.message,
      })
      .code(500);
  }
};

module.exports = {
  createPrediction,
  getPredictionHistory,
  getPredictionById,
  deletePrediction,
};
