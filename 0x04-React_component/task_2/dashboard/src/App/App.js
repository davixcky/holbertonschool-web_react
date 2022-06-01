import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./App.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notification";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";

class App extends Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20
    },
    {
      id: 3,
      name: 'React',
      credit: 40
    }
  ]
  listNotifications = [
    {
      id: 1,
      type: 'default',
      value: 'New resume available',
    },
    {
      id: 2,
      type: 'default',
      value: 'New resume available',
    },
    {
      id: 3,
      type: 'urgent',
      html: { __html: getLatestNotification() },
    },
  ];

  handleKeyPress(e) {
    e.preventDefault();
    if (e.keyCode === 72 && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <Header />
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        <Footer />
      </>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
}

export default App;
