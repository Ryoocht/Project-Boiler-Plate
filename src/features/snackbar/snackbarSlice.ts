import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { initialSnackbarState } from '../../assets/data/initialState'
import { ISnackbarAction } from '../../types/stateTypes'

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: initialSnackbarState,
    reducers: {
        openSnackbar: (state, action: PayloadAction<ISnackbarAction>) => {
            const { type, message, btnText, btnFunc } = action.payload
            state.isDisplayed = true
            state.snackbarType = type
            state.snackbarMessage = message
            state.snackbarBtnText = btnText
            state.snackbarBtnFunc = btnFunc
        },
        closeSnackbar: (state) => {
            state.isDisplayed = false
        }
    }
})

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions
export const selectSnackbar = (state: RootState) => state.snackbar
export default snackbarSlice.reducer