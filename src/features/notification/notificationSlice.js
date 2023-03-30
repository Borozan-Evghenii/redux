import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";



const notificationSlice = createSlice({

    name: 'notification',
    initialState: [],
    reducers:{
      allNotificationRead(state, action){
        state.forEach(notification =>
          notification.read = true
        )
      },
    },
    extraReducers(builder){
        builder.addCase(fetchNotification.fulfilled, (state, action)=>{
            state.push(...action.payload)
            state.forEach(notification => {
              notification.isNew = !notification.read
            })
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
export const {allNotificationRead} = notificationSlice.actions

export const selectAllNotification = state => state.notification