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

## API Endpoints

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
           "probability": 0.32,
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
               "probability": 0.32,
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
             "probability": 0.32,
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

## Deployment Guide

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud-based like MongoDB Atlas)

### Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   # Create .env file
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/sweetaware
   JWT_SECRET=your_jwt_secret_key_change_this_in_production
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```

### Production Deployment

#### Option 1: Traditional Server

1. Configure production environment variables
2. Build the application (if needed)
3. Start the server:
   ```bash
   npm start
   ```

#### Option 2: Docker Deployment

1. Create a `Dockerfile`:

   ```dockerfile
   FROM node:16

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .

   EXPOSE 3000

   CMD ["npm", "start"]
   ```

2. Build the Docker image:
   ```bash
   docker build -t sweetaware-api .
   ```
3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 --env-file .env sweetaware-api
   ```

#### Option 3: Cloud Deployment

The API can be deployed to various cloud platforms:

1. **Heroku**

   - Connect GitHub repository to Heroku
   - Configure environment variables in Heroku dashboard
   - Deploy from the dashboard or using Heroku CLI

2. **AWS Elastic Beanstalk**

   - Create an Elastic Beanstalk application
   - Configure environment variables
   - Deploy using AWS CLI or console

3. **Microsoft Azure**
   - Create an App Service
   - Configure environment variables
   - Deploy using Azure DevOps or GitHub integration

## Security Considerations

1. Store JWT_SECRET securely and use a strong, unique value in production
2. Set appropriate CORS settings in production to restrict access
3. Use HTTPS in production
4. Consider rate limiting to prevent abuse
5. Implement proper input validation and sanitization

## Future Enhancements

1. Add real machine learning model integration for predictions
2. Implement refresh tokens for better security
3. Add monitoring and logging
4. Add unit and integration tests
5. Implement API documentation using Swagger/OpenAPI

## Troubleshooting

- **Database Connection Issues**: Check MongoDB connection string and ensure MongoDB is running
- **Authentication Errors**: Verify JWT secret and token expiration settings
- **Prediction Service Errors**: Check the prediction model implementation and input validation
