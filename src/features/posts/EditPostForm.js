import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useEditPostMutation, useGetPostQuery} from "../api/apiSlice";

function EditPostForm({match}) {
  const history = useHistory()
  const {id} = match.params
    const {data: post} = useGetPostQuery(id)
    const [updatePost, {isLoading}] = useEditPostMutation()
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        />
      </form>
      <button type="button" onClick={()=> {
        updatePost({id, title, content})
        history.push(`/post/${post.id}`)
      }
      }>
        Save Post
      </button>
    </section>
  );
}

export default EditPostForm;