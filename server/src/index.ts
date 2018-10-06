import { typeDefs, resolvers } from "./schema";
import { ApolloServer } from "apollo-server";

const GRAPHQL_PORT = 4000;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: GRAPHQL_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
