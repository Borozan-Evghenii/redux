import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allNotificationRead, selectAllNotification} from "./notificationSlice";
import {getAllUsers} from "../users/userSlice";
import {formatDistanceToNow, parseISO} from "date-fns";
import classnames from 'classnames'

function NotificationList() {
    const dispatch = useDispatch()
    const notifications = useSelector(selectAllNotification)
    const users = useSelector(getAllUsers)
    useLayoutEffect(()=>{
      dispatch(allNotificationRead())
    })


    const renderNotification = notifications.map(notification => {
        const date = parseISO(notification.date)
        const user = users.find(user => user.id === notification.user ) || {name: 'Unknown User'}
        const timeAgo = formatDistanceToNow(date)
        const notificationClassname = classnames('notification', {
          new: notification.isNew
        })
        return (

            <div key={notification.id} className={notificationClassname}>
                <div>
                    <b>{user.name}</b> {notification.message}
                </div>
                <div title={notification.date}>
                    <i>{timeAgo} ago</i>
                </div>
            </div>

        )
    })

    return (
        <section className='notificationsList'>
            <h2>Notifications</h2>
            {renderNotification}
        </section>);
}

export default NotificationList;