import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";



const notificationSlice = createSlice({

    name: 'notification',
    initialState: [],
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchNotification.fulfilled, (state, action)=>{
            state.push(...action.payload)
            state.sort((a,b)=> b.date.localeCompare(a.date))
        })
    }

})


export const fetchNotification = createAsyncThunk('notification/fetchNotification', async (_, {getState})=>{
    const allNotification = selectAllNotification(getState())
    const [latestNotification] = allNotification
    const latestTimeStamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(`/fakeApi/notifications?since=${latestTimeStamp}`)
    return response.data

})

export default notificationSlice.reducer

export const selectAllNotification = state => state.notification