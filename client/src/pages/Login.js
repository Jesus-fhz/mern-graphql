import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button }  from 'semantic-ui-react'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { useForm } from '../CustomHooks/hooks'

function Login(){
      
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
   
    const {onChange, onSubmit, values} = useForm(logingCallback,{
        username: '',
        password: '',
    })

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
         update(_, result){
             navigate('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    })

    function logingCallback(){
        loginUser();
    }

    return(
        <>
        <Form onSubmit={onSubmit} noValidate className={loading ? "loading": ""}>
            <h1> Login </h1>
            <Form.Input
                type="text"
                label="Username"
                placeholder="Username"
                name="username"
                value={values.username}
                error={errors.username ? true : false}
                onChange={onChange}
            />
            <Form.Input
                type="password"
                label="Password"
                placeholder="password"
                name="password"
                error={errors.password ? true : false}
                value={values.password}
                onChange={onChange}
            />
            <Button type="submit" primary>
                Submit
            </Button>
        </Form>
        {
        Object.keys(errors)?.length > 0 &&  
            <div className="ui error message">
                <ul className="list">
                    {Object.values(errors)?.map(el => (
                        <li key={el}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        }
        </>
    )
}

const LOGIN_USER = gql`
  
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username
            password: $password
        ){
            id email username createdAt token
        }
    }
   
`
export default Login;