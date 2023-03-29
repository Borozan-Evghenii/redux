import React from 'react';
import {useSelector} from "react-redux";
import {getUserById} from "./userSlice";
import {Link} from "react-router-dom";

function UserPage({match}) {
  const {id} = match.params
  const user = useSelector(state=> getUserById(state, id))
  const userPosts = useSelector(state => state.posts.posts.filter(post => post.user === id))
  console.log(userPosts)
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
    </div>
  );
}

export default UserPage;