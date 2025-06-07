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

  async updateArticle(article) {
    try {
      // In a real app, this would make an API call to update the article
      // For now, we'll just simulate it
      console.log('Article updated:', article)
    } catch (error) {
      console.error('Error updating article:', error)
    }
  }
}

export default ArticlePresenter
