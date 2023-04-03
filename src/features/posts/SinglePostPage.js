import React from 'react';
import {Link} from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {useGetPostQuery} from "../api/apiSlice";
import {Spinner} from "../../components/Spinner";

function SinglePostPage({match}) {
  const {id} = match.params
  const {data: post =[], isFetching} = useGetPostQuery(id)
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  } else if (isFetching){
    return (<Spinner text={'isLoading'}/>)
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