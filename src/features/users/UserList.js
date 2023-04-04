import React from 'react';
import {Link} from "react-router-dom";
import {useGetUsersQuery} from "../api/apiSlice";

function UserList() {
const {data: users } = useGetUsersQuery()
    console.log(users)
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user=>
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserList;