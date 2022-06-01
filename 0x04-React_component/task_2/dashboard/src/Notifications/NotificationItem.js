import React from "react";
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead }) => {

    return (
        html
            ?
            <li onClick={markAsRead} data-priority={type} dangerouslySetInnerHTML={html}></li>
            :
            <li onClick={markAsRead} data-priority={type}>{value}</li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
}

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;
