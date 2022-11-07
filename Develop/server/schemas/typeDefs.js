const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users[User]
    user(username: String!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: Int
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(input: BookInput, authors: [String!]): User
    removeBook(bookId: Int!): User
  }
  
  input BookInput {
    authors: String!
    description: String!
    title: String!
    bookId: Int
    image: String!
    link: String!
  }

  type Auth {
    token: ID!
    user: User
`;

module.exports = typeDefs;