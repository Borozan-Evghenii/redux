import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

function PostsList() {
  const posts = useSelector(state => state.posts)
  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  return (
    <section className='post-list'>
      <h2 >Posts</h2>
      {orderedPosts.map(post=>
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <TimeAgo timestamp={post.date}/>
          <Link to={`/post/${post.id}`}>View More</Link>
          <ReactionButton post={post}/>
        </article>
      )}
    </section>
  );
}

export default PostsList;