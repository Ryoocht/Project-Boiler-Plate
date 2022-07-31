import React, { useEffect } from 'react'
import MyTextInput from '../../components/atoms/MyTextInput'
import { useFormik } from 'formik'
import MyButton from '../../components/atoms/MyButton'

export interface inputType {
    firstName: string
    lastName: string
}

const initialValues: inputType = {
    firstName: '',
    lastName: ''
}

const Login = () => {
    const { values, isSubmitting, handleSubmit, handleChange, setSubmitting } = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('this is clicked')
            console.log(values)
            setSubmitting(false)
        }
    })

    useEffect(() => {
        console.log({values})
        
    },[values])

    return (
        <div>
            <MyTextInput
                name='firstName'
                values={values}
                onChange={handleChange}
            />
            <MyButton
                isLoading={isSubmitting}
                onSubmit={handleSubmit as (values: any) => void}
            />
        </div>
    )
}

export default Login