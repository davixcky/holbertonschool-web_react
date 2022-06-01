import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Notification.css";
import closeIcon from "../assets/close_icon.png";
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";


class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  notifications() {
    const { displayDrawer, listNotifications } = this.props;
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
                  markAsRead={() => this.markAsRead(notification.id)}
                />)
            }
          </ul>
        </div>
      )
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {

    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.notifications()}
      </>
    )
  }

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
