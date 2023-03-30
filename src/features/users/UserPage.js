import React from 'react';
import {useSelector} from "react-redux";
import {getUserById} from "./userSlice";
import {Link} from "react-router-dom";
import NotificationList from "../notification/NotificationList";
import {memoSelectPostByUser} from "../posts/postSlice";

function UserPage({match}) {
  const {id} = match.params
  const user = useSelector(state=> getUserById(state, id))
  const userPosts = useSelector(state => memoSelectPostByUser(state, id))
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