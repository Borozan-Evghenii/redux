import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchNotification, selectAllNotification} from "../features/notification/notificationSlice";

export const Navbar = () => {
  const notification = useSelector(selectAllNotification)
  const unreadNotification = notification.filter(n => !n.read).length
  const dispatch = useDispatch()
  const fetchNotificationHandler = () => {
    dispatch(fetchNotification())
  }
  let notificationIndicator

    if (unreadNotification > 0){
      notificationIndicator =  (<span className="badge">{unreadNotification}</span>)
    }

  return (<nav>
    <section>
      <h1>Redux Essentials Example</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to={'/'}>Posts</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/notification'}>Notification {notificationIndicator}</Link>
        </div>
        <button className='button' onClick={fetchNotificationHandler}>
          Refresh Notification
        </button>
      </div>

    </section>
  </nav>)
}
