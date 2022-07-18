import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const userSlice = createSlice({
    name: 'user',
    initialState: {name: ''},
    reducers: {
        setUsers: (state) => {
            state.name += ''
        }
    }
})

export const { setUsers } = userSlice.actions
export const selectUsers = (state: RootState) => state.users
export default userSlice.reducer