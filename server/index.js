const { ApolloServer } = require('apollo-server');
const db = require('./config/db');
const {typeDefs, resolvers } = require('./grahpql/graph')

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
