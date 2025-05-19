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
