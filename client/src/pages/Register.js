import { useState } from 'react'
import { Form, Button }  from 'semantic-ui-react'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'

function Register(){
      
    const [errors, setErrors] = useState({})
    const [values,setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const onChange = (ev) => {
        setValues({...values, [ev.target.name] : ev.target.value})
    }

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, result){
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.errors);
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    })

    const onSubmit = (ev) =>{
        ev.preventDefault();
        addUser();
    }

    

    return(
        <>
        <Form onSubmit={onSubmit} noValidate className={loading ? "loading": ""}>
            <h1> Sign up </h1>
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
                type="email"
                label="Email"
                placeholder="Email"
                name="email"
                error={errors.email ? true : false}
                value={values.email}
                onChange={onChange}
            />
            <Form.Input
                type="password"
                label="Password"
                placeholder="Password"
                name="password"
                error={errors.password ? true : false}
                value={values.password}
                onChange={onChange}
            />
            <Form.Input
                type="password"
                label="Confirm Password"
                placeholder="ConfirmPassword"
                name="confirmPassword"
                error={errors.confirmPassword ? true : false}
                value={values.confirmPassword}
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

const REGISTER_USER = gql`
  
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ){
        register(
            registerInput:{
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id email username createdAt token
        }
    }
   
`
export default Register;