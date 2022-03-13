const validateRegisterInput = (username, email, password, confirmPassword) => {
    const errors = {}
    if(username.trim === ''){
        errors.username = 'Username must not be empty';
    }
    if(email.trim === '' ){
        errors.email = 'Username must not be empty';
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = "Must be a valid email";
        }
    }
    if(password === ''){
        errors.password = 'Username must not be empty'; 
    }else if( password !== confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}