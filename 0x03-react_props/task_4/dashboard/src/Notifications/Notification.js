import React from "react";
import PropTypes from 'prop-types';
import "./Notification.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close_icon.png";
import NotificationItem from "./NotificationItem";


const Notifications = ({ displayDrawer }) => {

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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
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
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
