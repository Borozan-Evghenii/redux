import React from 'react';
import {Link} from "react-router-dom";
import NotificationList from "../notification/NotificationList";
import {useGetPostsQuery, useGetUsersQuery} from "../api/apiSlice";

function UserPage({match}) {
  const {id} = match.params
    const{data:users} = useGetUsersQuery()
    const user = users.find(e=> e.id === id)
    const {data:posts} = useGetPostsQuery()
    const userPosts = posts.filter((post)=> post.user === id)
  return (
    <div>
      <div>
        <h2>{user.name}</h2>
      </div>
      <ul>
        {userPosts.map(post =>
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        )}
      </ul>
      <NotificationList/>
    </div>
  );
}

export default UserPage;