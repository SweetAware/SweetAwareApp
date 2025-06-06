import { AuthModel } from '../models/AuthModel'

export class LoginPresenter {
  constructor(view) {
    this.view = view
    this.authModel = new AuthModel()
  }

  async handleLogin(email, password, rememberMe) {
    try {
      this.view.setLoading(true)

      const credentials = {
        email,
        password,
      }

      const response = await this.authModel.login(credentials)

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true')
      } else {
        localStorage.removeItem('rememberMe')
      }

      this.view.onLoginSuccess(response.data)
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.'
      if (error.message === 'Invalid email or password') {
        errorMessage = 'Invalid email or password. Please check your credentials.'
      }
      this.view.onLoginError(errorMessage)
    } finally {
      this.view.setLoading(false)
    }
  }
}
