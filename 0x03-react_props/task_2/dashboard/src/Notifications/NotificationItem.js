import React from "react";

const NotificationItem = ({ type, html, value }) => {

    return (
        html
            ?
            <li data-priority={type} dangerouslySetInnerHTML={html}></li>
            :
            <li data-priority={type}>{value}</li>
    );
}

export default NotificationItem;
