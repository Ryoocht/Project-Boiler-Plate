import { ISnackbar } from '../../types/stateTypes'
import { SNACKBAR_BUTTON_TYPES, SNACKBAR_TYPES } from './enum'

export const initialSnackbarState: ISnackbar = {
    isDisplayed: false,
    snackbarType: SNACKBAR_TYPES.ERROR,
    snackbarMessage: '',
    snackbarBtnText: SNACKBAR_BUTTON_TYPES.CLOSE,
    snackbarBtnFunc: () => {}
    
}