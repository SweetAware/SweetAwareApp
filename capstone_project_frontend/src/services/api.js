const API_BASE_URL = 'https://sweetaware-production.up.railway.app'

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }
    return data
  } catch (error) {
    throw error
  }
}

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }
    return data
  } catch (error) {
    throw error
  }
}

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch profile')
    }
    return data
  } catch (error) {
    throw error
  }
}

// Create a prediction
export const createPrediction = async (predictionData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predictions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(predictionData),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create prediction')
    }
    return data
  } catch (error) {
    throw error
  }
}

// Get prediction history
export const getPredictionHistory = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predictions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch prediction history')
    }
    return data
  } catch (error) {
    throw error
  }
}

// Get prediction by ID
export const getPredictionById = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predictions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch prediction')
    }
    return data
  } catch (error) {
    throw error
  }
}

// Delete prediction
export const deletePrediction = async (id, token) => {
  try {
    if (!id) {
      throw new Error('Prediction ID is required')
    }
    const response = await fetch(`${API_BASE_URL}/api/predictions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete prediction')
    }
    return data
  } catch (error) {
    throw error
  }
}

// Get articles
export const getArticles = async (topic = 'diabetes', limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/articles?topic=${topic}&limit=${limit}`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch articles')
    }
    return data
  } catch (error) {
    throw error
  }
}
