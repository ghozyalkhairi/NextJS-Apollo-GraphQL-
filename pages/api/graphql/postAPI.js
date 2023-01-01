import { RESTDataSource } from "@apollo/datasource-rest"

class PostAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://jsonplaceholder.typicode.com/"
  }

  async getAllPosts() {
    return this.get("posts")
  }

  async getAllUsers() {
    return this.get("users")
  }

  async getPostById(id) {
    return this.get(`posts/${id}`)
  }

  async getUserById(id) {
    return this.get(`users/${id}`)
  }

  async getCommentsByPostID(id) {
    return this.get(`posts/${id}/comments`)
  }
}

export default PostAPI
