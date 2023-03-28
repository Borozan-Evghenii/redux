import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from "date-fns";


const initialState = [
  {id: '0', title: 'Hellor', content: 'Hello content', user: '1', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}},
  {id: '1', title: 'Hellor2', content: 'Hello content2', user: '0', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}},
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare({id, title, content, userId}) {
        return {
          payload:{
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
          }
        }
      }
    },
    updateReaction(state, action){
      const {id, reaction}= action.payload
      const currentPost = state.find(post => post.id === id)
      if (id && reaction) {
        currentPost.reactions[reaction]++
      }
    },
    updatePost(state, action) {
      const {id, title, content} = action.payload
      const currentPost = state.find(post => post.id === id)
      if (title && content) {
        currentPost.title = title
        currentPost.content = content
      }

    }
  }
})


export default postSlice.reducer
export const  { addPost, updatePost, updateReaction } = postSlice.actions