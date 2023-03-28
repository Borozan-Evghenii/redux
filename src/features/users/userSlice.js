import {createSlice} from "@reduxjs/toolkit";


const initialState= [
  {id: '0', name: 'Josh Bronson'},
  {id: '1', name: 'Eric Milton'},
  {id: '2', name: 'Joe Swanson'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{

  }
})


export default usersSlice.reducer
