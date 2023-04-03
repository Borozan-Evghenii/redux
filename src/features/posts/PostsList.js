import React, {useMemo} from 'react';
import {Link} from "react-router-dom";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {Spinner} from "../../components/Spinner";
import {useGetPostsQuery} from "../api/apiSlice";

function PostsList() {
  const {data: posts = [], isLoading, isSuccess, isError, error, refetch} = useGetPostsQuery()

  const sortedPosts = useMemo(()=>{
    const  sortedPosts = posts.slice()
    sortedPosts.sort((a,b)=> b.date.localeCompare(a.date))
    return sortedPosts
  },[posts])

  let PostExcerpt = ({post}) => {
    return (

        <article className="post-excerpt">
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <TimeAgo timestamp={post.date}/>
          <Link to={`/post/${post.id}`}>View More</Link>
          <ReactionButton post={post}/>
        </article>
    )
  }
  PostExcerpt = React.memo(PostExcerpt)
    let content
  if (isLoading) {
    content = (<Spinner text="Loading..." />)
  } else if (isSuccess) {
    content = (sortedPosts.map(post => <PostExcerpt key={post.id} post={post} />))
  } else if (isError) {
    content = (<div>{error.toString()}</div>)
  }
  return (
    <section className={'post-list'}>
      <h2>Posts</h2>
        <button onClick={refetch}>Refetch Posts</button>
      {
        content
      }
    </section>
  );
}

export default PostsList;