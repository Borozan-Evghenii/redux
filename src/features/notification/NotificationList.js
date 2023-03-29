import React, {useEffect} from 'react';
import { useSelector} from "react-redux";
import { selectAllNotification} from "./notificationSlice";
import {getAllUsers} from "../users/userSlice";
import {formatDistanceToNow, parseISO} from "date-fns";

function NotificationList() {

    const notifications = useSelector(selectAllNotification)
    const users = useSelector(getAllUsers)
    const renderNotification = notifications.map(notification => {
        const date = parseISO(notification.date)
        const user = users.find(user => user.id === notification.user ) || {name: 'Unknown User'}
        const timeAgo = formatDistanceToNow(date)
        return (

            <div key={notification.id} className="notification">
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