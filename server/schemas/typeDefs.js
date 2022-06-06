const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(title: String!, description: String!): Post
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    lastLogin: Date!
    posts: [Post]
  }

  type Post {
    _id: ID!
    title: String!
    description: String!
    user: ID!
  }
`;

module.exports = typeDefs;
