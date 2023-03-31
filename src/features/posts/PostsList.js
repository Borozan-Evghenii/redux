import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {fetchPosts, selectAllPosts, selectPostById, selectPostsIds} from "./postSlice";
import {Spinner} from "../../components/Spinner";

function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(state => state.posts.status)
  const orderedPosts = useSelector(selectPostsIds)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }

  }, [postsStatus, dispatch])

  if (postsStatus === 'pending') {
    return (
      <Spinner text={'loading'}></Spinner>
    )
  }

  let PostExcerpt = ({postId}) => {
    const post = useSelector(state => selectPostById(state, postId))
    return (
      <>
        <article className="post-excerpt">
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
      <h2>Posts</h2>
      {orderedPosts.map(postId =>
        <PostExcerpt key={postId} postId={postId}/>
      )}
    </section>
  );
}

export default PostsList;