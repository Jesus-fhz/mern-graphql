import { useState } from "react";

export const useForm = (callback, initialState = { }) =>{
    const [values,setValues] = useState(initialState);

    const onChange = (ev) => {
        setValues({...values, [ev.target.name] : ev.target.value})
    }

    const onSubmit = (ev) => {
       ev.preventDefault();
       callback();
    }

    return {
        onChange,
        onSubmit,
        values
    }
}