import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
    user: {}
}


//Check if Token hasn't expired 
if(localStorage.getItem('token')){
    //We decode token to get expiration date
    const decodeToken = jwtDecode(localStorage.getItem('token'))
    //If expired we remove token 
    if(Date.now() >= (decodeToken.exp * 1000)){
        localStorage.removeItem('token')
    }else{
        //We set the user state with the his information
        initialState.user = decodeToken;
    }
}

const AuthContext = createContext({
    user: {},
})

//Dispatch function based on action 
function authReducer(state, action){
    console.log(action.payload);
    switch(action.type){

        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user:null
            }

        default: 
        return state;
    }
        
}

function AuthProvider(props){
    const [state, dispatch] = useReducer(authReducer, initialState);

    //Loging Function
    function login(userData){
        localStorage.setItem('token',userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }
    
    //Logout Function
    function logout(){
        localStorage.removeItem('token')
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <AuthContext.Provider 
            value={{user: state.user, login, logout}}
            {...props}
        />
        
    )

}
export { AuthContext, AuthProvider }