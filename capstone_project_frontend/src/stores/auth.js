import { ref, computed } from 'vue'

const userState = ref(null)
const token = ref(localStorage.getItem('token') || null)

export const useAuth = () => {
  const setUser = (userData) => {
    userState.value = userData
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData))
    } else {
      localStorage.removeItem('user')
    }
  }

  const setToken = (newToken) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  const login = (userData, authToken) => {
    setUser(userData)
    setToken(authToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  const isLoggedIn = computed(() => !!token.value)

  return {
    user: userState,
    token,
    login,
    logout,
    isLoggedIn,
  }
}
