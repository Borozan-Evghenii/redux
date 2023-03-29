import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchNotification} from "../features/notification/notificationSlice";

export const Navbar = () => {

  const dispatch = useDispatch()
  const fetchNotificationHandler = () => {
    dispatch(fetchNotification())
  }

  return (<nav>
    <section>
      <h1>Redux Essentials Example</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to={'/'}>Posts</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/notification'}>Notification</Link>
        </div>
        <button className='button' onClick={fetchNotificationHandler}>
          Refresh Notification
        </button>
      </div>

    </section>
  </nav>)
}
