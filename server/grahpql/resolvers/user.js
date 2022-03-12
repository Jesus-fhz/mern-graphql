const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require('apollo-server');

module.exports = {
    Mutation : {
        //Mutations allow you to modify server-side data, and it also returns an object based on the operation performed. 
        // It can be used to insert, update, or delete data.
       async register(_, {registerInput: {username, email,password,confirmPassword}}){
            //TODO: Validate user data

            //TODO: Make sure user doesn't already exist
            const user = await User.findOne({username});
            if(user){ 
                throw new UserInputError('Username already exist',{
                    errors:{
                        username: 'This user is already taken'
                    }
                })
            }
            //TODO: Hash password and return an auth token



            password = await bcrypt.hash(password, 12); //We await because bcrypt is async
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date()
            });
            const result = await newUser.save();

            const token = jwt.sign({
                id: result.id,
                username: result.username,
                email: result.email
            }, process.env.SECRET_KEY, {expiresIn: '24h'});

            return {
                ...result._doc,
                id: result.id,
                token
            }
        }
    }
}