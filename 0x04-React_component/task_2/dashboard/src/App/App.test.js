import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  let wrapper = shallow(<App />); // undefined

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  test("App renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain the Notifications component', () => {
    const notification = wrapper.find('Notifications').length;
    expect(notification).toBe(1);
  })

  test('should contain the Header component', () => {
    const header = wrapper.find('Header').length;
    expect(header).toBe(1);
  })

  test('should contain the Login component', () => {
    const logIn = wrapper.find('Login').length;
    expect(logIn).toBe(1);
  })

  test('should contain the Login component', () => {
    const footer = wrapper.find('Footer').length;
    expect(footer).toBe(1);
  })

  test('should not display CourseList', () => {
    const couseList = wrapper.find('CourseList');
    expect(couseList.length).toBe(0);
  })

  test('should verify that the Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn />);
    const logIn = wrapper.find('Login');
    expect(logIn.length).toBe(0);
  })

  test('should verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn />);
    const courseList = wrapper.find('CourseList');
    expect(courseList.length).toBe(1);
  })

  test('ddd', () => {
    const alertMock = jest.fn();
    window.alert = alertMock;
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    })

    let wrapper2 = shallow(<App />);
    map.keydown({ keyCode: 72, ctrlKey: true, preventDefault: () => { } });
    wrapper.setProps({ isLoggedIn: true });
    wrapper.simulate('keyDown', { keyCode: 72, ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    window.alert.mockClear();
    wrapper2.unmount();

  });

});
