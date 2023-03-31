import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";


const notificationAdapter = createEntityAdapter({
    sortComparer: (a,b) => b.date.localeCompare(a.date)
})
const initialState = notificationAdapter.getInitialState()


const notificationSlice = createSlice({

    name: 'notification',
    initialState,
    reducers:{
      allNotificationRead(state, action){
        Object.values(state.entities).forEach(notification =>
          notification.read = true
        )
      },
    },
    extraReducers(builder){
        builder.addCase(fetchNotification.fulfilled, (state, action)=>{
            notificationAdapter.upsertMany(state, action.payload)
            Object.values(state.entities).forEach(notification => {
              notification.isNew = !notification.read
            })
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

export const {
    selectAll: selectAllNotification,
    selectById: selectNotificationById,
    selectIds: selectNotificationIds
} = notificationAdapter.getSelectors(state => state.notification)