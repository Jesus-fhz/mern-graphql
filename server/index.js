const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const db = require('./config/db');

//Graph-QL Queries
const typeDefs = gql`
    type Query{
        sayHi: String! #Exclamation mark means that is required
    }
`
//For each query or mutuation there is a resolver, which processes any sort of logic 
const resolvers = {
    Query: {
        sayHi: () => "Hello "
    }
}


const server = new ApolloServer({ 
    typeDefs,
    resolvers
})

//Once connection is establish we run server
db.once('open', async () => {
    await server.listen({port:4000})
            .then(res => console.log(`Server ${res.url}`))
            .catch(error => console.log(error));
});
