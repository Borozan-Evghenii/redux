import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPostById, updatePost} from "./postSlice";
import {useHistory} from "react-router-dom";

function EditPostForm({match}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const {id} = match.params
  const post = useSelector(state => selectPostById(state, id))
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
        dispatch(updatePost({id, title, content}))
        history.push(`/post/${post.id}`)
      }
      }>
        Save Post
      </button>
    </section>
  );
}

export default EditPostForm;