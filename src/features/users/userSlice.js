import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {client} from '../../api/client'

const userAdapter = createEntityAdapter()
const initialState = userAdapter.getInitialState()


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, userAdapter.setAll)
    }
})


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data

})

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,

} = userAdapter.getSelectors(state => state.users)
export default usersSlice.reducer
