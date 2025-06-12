# SweetAware API Implementation Guide

## Overview

This document provides a detailed summary of the SweetAware RESTful API implementation using the Hapi framework. The API supports the front-end "SweetAware" application with features including user authentication, prediction functionality, and prediction history tracking.

## Architecture

The API follows a structured architecture:

```
/
├── .env                 # Environment variables
├── package.json         # Project configuration
├── README.md            # Project documentation
└── src/                 # Source code
    ├── index.js         # Entry point
    ├── server.js        # Server configuration
    ├── config/          # Configuration files
    │   ├── database.js  # Database connection
    │   └── index.js     # Global config
    ├── controllers/     # Request handlers
    │   ├── authController.js     # Authentication logic
    │   └── predictionController.js # Prediction logic
    ├── models/          # Data models
    │   ├── User.js      # User model
    │   └── Prediction.js # Prediction model
    ├── routes/          # API routes
    │   ├── authRoutes.js        # Authentication routes
    │   ├── predictionRoutes.js  # Prediction routes
    │   └── index.js             # Route configuration
    └── utils/           # Utility functions
        └── auth.js      # Authentication utilities
```

## API Documentation

https://sweetaware-api.netlify.app

<<<<<<< workplace
### Authentication

1. **Register a new user**

   - **URL:** `POST /api/auth/register`
   - **Request Body:**
     ```json
     {
       "username": "johndoe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "message": "User registered successfully",
       "data": {
         "id": "60d21b4667d0d8992e610c85",
         "username": "johndoe",
         "email": "john@example.com"
       }
     }
     ```

2. **Login**

   - **URL:** `POST /api/auth/login`
   - **Request Body:**
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "message": "Login successful",
       "data": {
         "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
         "user": {
           "id": "60d21b4667d0d8992e610c85",
           "username": "johndoe",
           "email": "john@example.com"
         }
       }
     }
     ```

3. **Get User Profile**

   - **URL:** `GET /api/auth/profile`
   - **Headers:**
     ```
     Authorization: Bearer [JWT_TOKEN]
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "data": {
         "user": {
           "id": "60d21b4667d0d8992e610c85",
           "username": "johndoe",
           "email": "john@example.com",
           "createdAt": "2023-06-22T08:24:22.000Z"
         }
       }
     }
     ```

4. **Update User Profile**
   - **URL:** `PUT /api/auth/profile`
   - **Headers:**
     ```
     Authorization: Bearer [JWT_TOKEN]
     ```
   - **Request Body:** (semua field bersifat opsional, minimal satu harus disertakan)
     ```json
     {
       "username": "johnupdated",
       "email": "johnupdated@example.com",
       "currentPassword": "password123",
       "newPassword": "newpassword123"
     }
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "message": "Profile updated successfully",
       "data": {
         "user": {
           "id": "60d21b4667d0d8992e610c85",
           "username": "johnupdated",
           "email": "johnupdated@example.com",
           "createdAt": "2023-06-22T08:24:22.000Z"
         }
       }
     }
     ```

### Prediction

1. **Create a Prediction**

   - **URL:** `POST /api/predictions`
   - **Headers:**
     ```
     Authorization: Bearer [JWT_TOKEN]
     ```
   - **Request Body:**
     ```json
     {
       "glucose": 120,
       "bloodPressure": 80,
       "skinThickness": 20,
       "insulin": 79,
       "bmi": 23.1,
       "age": 30
     }
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "message": "Prediction created successfully",
       "data": {
         "id": "60d21b4667d0d8992e610c86",
         "inputData": {
           "glucose": 120,
           "bloodPressure": 80,
           "skinThickness": 20,
           "insulin": 79,
           "bmi": 23.1,
           "age": 30
         },
         "result": {
           "prediction": "Low Risk",
           "riskScore": 0.32,
           "details": {
             "factors": {
               "glucose": "Normal",
               "bloodPressure": "Normal",
               "bmi": "Normal"
             }
           }
         },
         "createdAt": "2023-06-22T08:30:22.000Z"
       }
     }
     ```

2. **Get Prediction History**

   - **URL:** `GET /api/predictions?page=1&limit=10`
   - **Headers:**
     ```
     Authorization: Bearer [JWT_TOKEN]
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "data": {
         "predictions": [
           {
             "_id": "60d21b4667d0d8992e610c86",
             "inputData": {
               "glucose": 120,
               "bloodPressure": 80,
               "skinThickness": 20,
               "insulin": 79,
               "bmi": 23.1,
               "age": 30
             },
             "result": {
               "prediction": "Low Risk",
               "riskScore": 0.32,
               "details": {
                 "factors": {
                   "glucose": "Normal",
                   "bloodPressure": "Normal",
                   "bmi": "Normal"
                 }
               }
             },
             "createdAt": "2023-06-22T08:30:22.000Z",
             "user": "60d21b4667d0d8992e610c85"
           }
           // More prediction records
         ],
         "pagination": {
           "total": 5,
           "page": 1,
           "limit": 10,
           "pages": 1
         }
       }
     }
     ```

3. **Get Specific Prediction**
   - **URL:** `GET /api/predictions/{id}`
   - **Headers:**
     ```
     Authorization: Bearer [JWT_TOKEN]
     ```
   - **Response:**
     ```json
     {
       "status": "success",
       "data": {
         "prediction": {
           "_id": "60d21b4667d0d8992e610c86",
           "inputData": {
             "glucose": 120,
             "bloodPressure": 80,
             "skinThickness": 20,
             "insulin": 79,
             "bmi": 23.1,
             "age": 30
           },
           "result": {
             "prediction": "Low Risk",
             "riskScore": 0.32,
             "details": {
               "factors": {
                 "glucose": "Normal",
                 "bloodPressure": "Normal",
                 "bmi": "Normal"
               }
             }
           },
           "createdAt": "2023-06-22T08:30:22.000Z",
           "user": "60d21b4667d0d8992e610c85"
         }
       }
     }
     ```

### Articles

1. **Get Articles**
   - **URL:** `GET /api/articles?topic=diabetes&limit=5`
   - **Query Parameters:**
     - `topic` (optional): Filter articles by topic (default: 'diabetes')
     - `limit` (optional): Number of articles to return (default: 10, max: 50)
   - **No Authentication Required**
   - **Response:**
     ```json
     [
       {
         "title": "Cara Mengontrol Gula Darah Secara Alami",
         "summary": "Berikut adalah beberapa tips alami untuk menjaga kadar gula darah tetap stabil...",
         "url": "https://news.example.com/artikel-diabetes",
         "source": "Healthline",
         "publishedAt": "2025-05-28T12:00:00Z",
         "imageUrl": "https://example.com/images/diabetes-care.jpg"
       }
       // More articles
     ]
     ```

## Healthy Food Recommendations

The API includes personalized healthy food recommendations based on the diabetes risk assessment. These recommendations are included in the prediction response and are categorized based on:

1. **Risk Level** - Different food recommendations for High, Moderate, and Low risk levels
2. **Health Factors** - Additional recommendations for specific health factors (high BMI, elevated blood glucose, high HbA1c)

The recommendations follow this structure:

```json
"recommendations": {
  "lifestyle": ["Maintain a balanced diet...", "Regular physical activity..."],
  "monitoring": ["Regular blood glucose monitoring...", "Check blood glucose levels..."],
  "consultation": ["Schedule an appointment with...", "Follow up with..."],
  "healthyFoods": [
    {
      "category": "Protein Tanpa Lemak",
      "options": ["Ikan salmon", "Tempe", "Tahu", "Dada ayam tanpa kulit"]
    },
    {
      "category": "Karbohidrat Kompleks",
      "options": ["Beras merah", "Quinoa", "Oatmeal", "Roti gandum utuh"]
    }
  ]
}
```

The system provides various food categories including:

- Proteins (lean proteins)
- Complex carbohydrates (low glycemic index)
- Non-starchy vegetables
- Healthy fats
- Low-glycemic fruits
- Spices and herbs beneficial for blood glucose control
- Healthy food pairings for stable blood glucose

=======
>>>>>>> main
## Future Enhancements

1. Add real machine learning model integration for predictions
2. Implement refresh tokens for better security
3. Add monitoring and logging
4. Add unit and integration tests
5. Implement API documentation using Swagger/OpenAPI
6. Add multilingual support for food recommendations

## Troubleshooting

- **Database Connection Issues**: Check MongoDB connection string and ensure MongoDB is running
- **Authentication Errors**: Verify JWT secret and token expiration settings
- **Prediction Service Errors**: Check the prediction model implementation and input validation

## Error Responses

- **Code:** 400 BAD REQUEST
- **Code:** 401 UNAUTHORIZED
- **Code:** 404 NOT FOUND
- **Code:** 500 INTERNAL SERVER ERROR

## Rate Limiting

- 100 requests per IP per minute

## Notes

- All timestamps are in ISO 8601 format
- Blood pressure should be in format "systolic/diastolic" (e.g., "120/80")
- Blood glucose values should be in mg/dL
