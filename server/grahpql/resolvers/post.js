//RESOLVERS
//For each query or mutuation there is a resolver, which processes any sort of logic 
const Post = require('../../models/Post');
module.exports =  {
    Query: {
        async getPosts(){
            try {
                const result = await Post.find();
                return result
            } catch (error) {
                throw new Error(error);
            }
        },
    },

}