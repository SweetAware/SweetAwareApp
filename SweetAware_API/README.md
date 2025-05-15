# SweetAware API

A RESTful API for SweetAware Application built with Hapi.js framework.

## Features

- User authentication (Register, Login)
- Predict glucose levels (mock implementation)
- Prediction history

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/sweetaware
   JWT_SECRET=your_jwt_secret_key_change_this_in_production
   ```
4. Start the server:

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register** - Register a new user

  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **POST /api/auth/login** - Login a user

  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **GET /api/auth/profile** - Get user profile (Requires authentication)

### Predictions

- **POST /api/predictions** - Create a new prediction (Requires authentication)

  ```json
  {
    "gender": "Male",
    "age": 45,
    "hypertension": true,
    "heartDisease": false,
    "smokingHistory": "former",
    "bmi": 26.5,
    "hbA1cLevel": 6.7,
    "bloodGlucoseLevel": 145
  }
  ```

- **GET /api/predictions** - Get prediction history (Requires authentication)

  - Query parameters:
    - page (default: 1)
    - limit (default: 10)

- **GET /api/predictions/{id}** - Get specific prediction (Requires authentication)

## Authentication

The API uses JWT for authentication. After logging in, you will receive a token.
Include this token in the Authorization header for protected routes:

```
Authorization: Bearer YOUR_JWT_TOKEN
```
