const gql = require('graphql-tag');
const Post = require('../models/Post');
const db = require('../config/db')

//Graph-QL Queries
const typeDefs = gql`
    scalar Date,
    type Post{
        id: ID!,  #Exclamation mark means that is required
        body: String!,
        username: String!,
        createdAt: Date!
    },
    type Query{
        getPosts:[Post],
    }
`
//For each query or mutuation there is a resolver, which processes any sort of logic 
const resolvers = {
    Query: {
        async getPosts(){
            try {
                const result = await Post.find();
                return result
            } catch (error) {
                throw new Error(error);
            }
        }
    },

}

module.exports = { typeDefs, resolvers }