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

});
