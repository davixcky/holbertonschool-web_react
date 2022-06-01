import React from "react";
import "./Notification.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close_icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";

class Notifications extends React.Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  }
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.state = {
      listNotifications: [],
      displayDrawer: false,
    };

  }

  shouldComponentUpdate(nextState) {
    return nextState.listNotifications !== this.state.listNotifications;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    console.log("🚀 ~ render ~ this.props");
    return (
      <div className="menuItem">
        <p>Your notifications</p>
        {this.props.displayDrawer &&
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
              {this.props.listNotifications.length === 0
                ? <p className="empty-notifications">No new notification for now</p>
                : this.props.listNotifications.map(notification => <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={() => this.markAsRead(notification.id)}
                />)
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
