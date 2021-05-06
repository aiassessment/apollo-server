const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }
  type Query {
    user(id: Int!): User
  }
`;

module.exports = typeDefs;
