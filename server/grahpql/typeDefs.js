const gql = require('graphql-tag');
//Graph-QL Queries
module.exports = gql`
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