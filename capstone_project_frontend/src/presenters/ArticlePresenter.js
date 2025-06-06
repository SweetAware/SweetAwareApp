import ArticleModel from '../models/ArticleModel'

class ArticlePresenter {
  constructor() {
    this.model = new ArticleModel()
    this.view = null
  }

  setView(view) {
    this.view = view
  }

  async loadArticles(topic, limit) {
    try {
      this.view.setLoading(true)
      const articles = await this.model.getArticles(topic, limit)
      this.view.displayArticles(articles)
    } catch (error) {
      this.view.showError('Failed to load articles. Please try again later.')
    } finally {
      this.view.setLoading(false)
    }
  }
}

export default ArticlePresenter
