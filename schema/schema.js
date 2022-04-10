const { gql } = require("apollo-server")

const typeDefs = gql `
    type Books {
        _id: ID!,
        title: String!,
        description: String!,
        author: String!,
        publisher: String!,
        category: String!,
        remaining: Int!,
        release_year: Int!,
    }

    type Users {
        _id: ID!,
        username: String!,
        firstname: String!,
        lastname: String!,
        current_age: Int!,
        address: String!,
        university: String!,
        country: String!,
        roles: String!,
    }

    type Query {
        getAllBooks: [Books]!,
        getSelectedBook(_id: ID!): Books,

        getAllUsers: [Users]!,
        getSelectedUser(_id: ID!): Users,
    }

    type Mutation {
        createBooks (
            title: String!,
            description: String!,
            author: String!,
            publisher: String!,
            category: String!,
            remaining: Int!,
            release_year: Int!,
        ) : Books!,

        updateBooks (
            _id: ID!,
            title: String,
            description: String,
            author: String,
            publisher: String,
            category: String,
            remaining: Int,
            release_year: Int,
        ) : Books!,

        deleteBooks (_id: ID!) : Boolean,

        createUsers(
            username: String!,
            firstname: String!,
            lastname: String!,
            current_age: Int!,
            address: String!,
            university: String!,
            country: String!,
            roles: String!,
        ) : Users!,

        updateUsers(
            _id: ID!,
            username: String,
            firstname: String,
            lastname: String,
            current_age: Int,
            address: String,
            university: String,
            country: String,
            roles: String,
        ) : Users!,

        deleteUsers (_id: ID!) : Boolean,
    }
`

module.exports = typeDefs