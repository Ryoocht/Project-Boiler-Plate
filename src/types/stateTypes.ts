import { SNACKBAR_BUTTON_TYPES, SNACKBAR_TYPES } from '../assets/data/enum'

export interface ISnackbar {
    isDisplayed: boolean
    snackbarType: SNACKBAR_TYPES
    snackbarMessage: string
    snackbarBtnText?: SNACKBAR_BUTTON_TYPES
    snackbarBtnFunc?: () => {} | void
}

export interface ISnackbarAction {
    type: SNACKBAR_TYPES
    message: string
    btnText?: SNACKBAR_BUTTON_TYPES | undefined
    btnFunc?: () => {} | void
}