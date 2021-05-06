const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/schema");
const models = require("./models");
const resolvers = require("./src/resolvers");

// Provide resolver functions for your schema fields
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
