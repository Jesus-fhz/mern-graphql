const gql = require('graphql-tag');
//Graph-QL Queries
module.exports = gql`
    scalar Date,
    type Post{ #Post model Type
        id: ID!,  #Exclamation mark means that is required
        body: String!,
        username: String!,
        createdAt: Date!
    },

    type User { #User model type
        id: ID!, 
        email: String!
        token: String!
        username: String!
        createdAt: Date!
    },
    
    input RegisterInput{ #Diferent "type" for handling form data 
        username: String!,
        password: String!,
        confirmPassword: String!,
        email: String!
    }, 

    type Query{
        getPosts:[Post],
    },

    type Mutation{
        register(registerInput: RegisterInput): User!
    }
`