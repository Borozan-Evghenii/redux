import React from 'react';
import {useSelector} from "react-redux";
import {selectUserById} from "./userSlice";
import {Link} from "react-router-dom";
import NotificationList from "../notification/NotificationList";

function UserPage({match}) {
  const {id} = match.params
  return (
    <div>
      <div>
        {/*<h2>{user.name}</h2>*/}
      </div>
      <ul>
        {/*{userPosts.map(post =>*/}
        {/*  <li key={post.id}>*/}
        {/*    <Link to={`/post/${post.id}`}>{post.title}</Link>*/}
        {/*  </li>*/}
        {/*)}*/}
      </ul>
      <NotificationList/>
    </div>
  );
}

export default UserPage;