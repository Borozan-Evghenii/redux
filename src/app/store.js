import {configureStore} from '@reduxjs/toolkit'
import postReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/userSlice";
import notificationReducer from "../features/notification/notificationSlice";
import {apiSlice} from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notification: notificationReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
