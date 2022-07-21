import { ISnackbar } from '../../types/stateTypes'
import { SNACKBAR_BUTTON_TYPES, SNACKBAR_TYPES } from './enum'

export const initialSnackbarState: ISnackbar = {
    isDisplayed: true,
    snackbarType: SNACKBAR_TYPES.ERROR,
    snackbarMessage: 'Invalid bank details. Please check your bank detail and try again.',
    snackbarBtnText: SNACKBAR_BUTTON_TYPES.CLOSE,
    snackbarBtnFunc: () => {}
}