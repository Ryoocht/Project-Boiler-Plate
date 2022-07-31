import { FormikHelpers } from 'formik'
import React from 'react'
import { inputType } from '../../pages/Auth/Login'
import { RFC } from '../../types/reactTypes'

type Props = {
    isLoading: boolean
    onSubmit(event: React.FormEvent<HTMLButtonElement>): void;
}

const MyButton:RFC<Props> = ({ isLoading, onSubmit }) => {
    return (
        <>
            {isLoading
            ? <></>
            :
            <button
                onSubmit={(e) => onSubmit(e)}
            >
                submit
            </button>
            }
        </>
    )
}

export default MyButton