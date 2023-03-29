import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {selectPostById} from "./postSlice";

function SinglePostPage({match}) {
  const {id} = match.params

  const post = useSelector(state => selectPostById(state, id))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user}/>
        <TimeAgo timestamp={post.date}/>
        <p className="post-content">{post.content}</p>
        <ReactionButton post={post}/>
        <Link to={`/editPost/${post.id}`} className='button'>Edit Post</Link>
      </article>
    </section>
  );
}

export default SinglePostPage;