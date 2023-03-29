import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import {client} from "../../api/client";


const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

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
      const currentPost = state.posts.find(post => post.id === id)
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
  },
  extraReducers(builder){
    builder
      .addCase(fetchPosts.pending, (state, action)=>{
        state.status = 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action)=>{
        state.status = 'fulfilled'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action)=>{
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action)=>{
        state.posts .push(action.payload)
      })
  }

})


export const addNewPost = createAsyncThunk('posts/AddNewPost', async (initialPosts)=>{
  const response = await client.post('/fakeApi/posts', initialPosts)
  return response.data
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
  const response = await client.get('/fakeApi/posts')
  return response.data
})


export default postSlice.reducer
export const  { addPost, updatePost, updateReaction } = postSlice.actions
export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, id) => state.posts.posts.find(post => post.id === id)