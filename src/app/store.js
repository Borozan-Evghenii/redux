import {configureStore} from '@reduxjs/toolkit'
import postReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/userSlice";
import notificationReducer from "../features/notification/notificationSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notification: notificationReducer,
  },
})
