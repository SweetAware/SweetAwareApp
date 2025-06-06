import { AuthModel } from '../models/AuthModel'

export class RegisterPresenter {
  constructor(view) {
    this.view = view
    this.authModel = new AuthModel()
  }

  async handleRegister(username, email, password) {
    try {
      this.view.setLoading(true)

      const credentials = {
        username,
        email,
        password,
      }

      const response = await this.authModel.register(credentials)
      this.view.onRegisterSuccess(response.data)
    } catch (error) {
      let errorMessage = 'Registration failed. Please try again.'

      if (error.status === 'error') {
        if (error.message.includes('already exists')) {
          errorMessage = 'A user with this email or username already exists.'
        } else if (error.message.includes('validation')) {
          errorMessage = error.message
        }
      }

      this.view.onRegisterError(errorMessage)
    } finally {
      this.view.setLoading(false)
    }
  }
}
