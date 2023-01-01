import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import typeDefs from "./schema"
import resolvers from "./resolvers"
import PostAPI from "./postAPI"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async ({ req, res }) => ({
    dataSources: {
      postAPI: new PostAPI(),
    },
  }),
})
