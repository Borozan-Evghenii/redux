import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {fetchPosts, selectAllPosts} from "./postSlice";
import {Spinner} from "../../components/Spinner";

function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(state => state.posts.status)
  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

  useEffect(()=>{
    if (postsStatus === 'idle'){
      dispatch(fetchPosts())
    }

  },[postsStatus, dispatch])

  if (postsStatus === 'pending'){
    return (
      <Spinner text={'loading'}></Spinner>
    )
  }

  let PostExcerpt = ({post})=>{
    return(
      <>
          <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <TimeAgo timestamp={post.date}/>
            <Link to={`/post/${post.id}`}>View More</Link>
            <ReactionButton post={post}/>
          </article>
      </>
    )
  }
  PostExcerpt = React.memo(PostExcerpt)

  return (
    <section className='post-list'>
      <h2 >Posts</h2>
      {orderedPosts.map(post =>
        <PostExcerpt key={post.id} post={post}/>
      )}
    </section>
  );
}

export default PostsList;