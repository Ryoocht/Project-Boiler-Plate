import React, { ChangeEvent } from 'react'
import { inputType } from '../../pages/Auth/Login'
import { RFC } from '../../types/reactTypes'

type Props = {
    name: string
    values: inputType
    onChange: { 
        (e: ChangeEvent<any>): void; 
        <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any> 
        ? void 
        : (e: string | ChangeEvent<inputType>) => void; 
    }
}

const MyTextInput:RFC<Props> = ({ name, values, onChange }) => {
  return (
    <>
        <input 
            name={name}
            type='text'
            value={values.firstName}
            onChange={onChange}
            style={{background: 'red'}}
        />
    </>
  )
}

export default MyTextInput