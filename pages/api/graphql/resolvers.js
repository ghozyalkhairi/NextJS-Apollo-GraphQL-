const resolvers = {
  Query: {
    posts: (_, __, { dataSources }) => dataSources.postAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) => dataSources.postAPI.getPostById(id),
    users: (_, __, { dataSources }) => dataSources.postAPI.getAllUsers(),
    user: (_, { id }, { dataSources }) => dataSources.postAPI.getUserById(id),
  },
  Post: {
    user: ({ userId }, _, { dataSources }) =>
      dataSources.postAPI.getUserById(userId),
    comments: ({ id }, _, { dataSources }) =>
      dataSources.postAPI.getCommentsByPostID(id),
  },
  User: {
    posts: ({ id }, _, { dataSources }) => {
      return dataSources.postAPI
        .getAllPosts()
        .then((posts) => posts.filter((post) => post.userId === id))
    },
  },
}

export default resolvers
