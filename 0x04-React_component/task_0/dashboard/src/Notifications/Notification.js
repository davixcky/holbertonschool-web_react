import React from "react";
import PropTypes from 'prop-types';
import "./Notification.css";
import closeIcon from "../assets/close_icon.png";
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";


const Notifications = ({ displayDrawer, listNotifications }) => {

  const notifications = () => {
    if (displayDrawer) {
      return (
        <div className="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            aria-label="close"
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {
              listNotifications.length === 0
                ? <p className="empty-notifications">No new notification for now</p>
                :
                listNotifications.map(notification => <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />)
            }
          </ul>
        </div>
      )
    }
  }
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {notifications()}

    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape(NotificationItemShape)
  )
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;
