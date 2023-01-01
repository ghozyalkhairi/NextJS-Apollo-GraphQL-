const typeDefs = `#graphql
  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
    users: [User!]!
    user(id: ID!): User!
  }

# Post type
  type Post {
    id: ID!
    userId: Int!
    title: String!
    body: String!
    user: User!
  }

# User type
  type User {
    id: ID! 
    name: String!
    username: String!
    email: String!
    address: Address!
    company: Company!
    posts: [Post!]!
  }

# User's address type
  type Address {
    city: String!
  }

# User's company type
  type Company {
    name: String!
  }
`

export default typeDefs
