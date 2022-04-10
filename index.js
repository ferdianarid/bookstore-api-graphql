const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")

const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = require("./schema/schema")
const resolvers = require("./resolvers/resolvers")

mongoose.connect("mongodb://localhost:27017/books-graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server is ready at ${url}`);
});