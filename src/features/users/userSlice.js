import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { client } from '../../api/client'

const initialState= [
  {id: '0', name: 'Josh Bronson'},
  {id: '1', name: 'Eric Milton'},
  {id: '2', name: 'Joe Swanson'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{},
  extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      return action.payload
    })
  }
})


export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
   const response = await client.get('/fakeApi/users')
  return response.data

})


export const getAllUsers = state => state.users
export const getUserById = (state, id) => state.users.find(user => user.id === id)
export default usersSlice.reducer
