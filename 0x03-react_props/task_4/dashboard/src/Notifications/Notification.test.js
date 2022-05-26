import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notification";

describe("<Notifications />", () => {
  let wrapper = shallow(<Notifications displayDrawer />);

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer />);
  })

  test("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test("Notifications renders three list items", () => {
    expect(wrapper.find("NotificationItem").length).toBe(3);
  });

  test("Notifications renders the text Here is the list of notifications", () => {
    const text = "Here is the list of notifications";
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });

  test('should check that the menu item is being displayed', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem p").text().trim()).toBe("Your notifications");
  })

  test('should check that the div.Notifications is not being displayed', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  })

  test('should check if menu item and div.Notifications are being displayed, ', () => {
    expect(wrapper.find(".menuItem p").text().trim()).toBe("Your notifications");
    expect(wrapper.find('.Notifications').length).toBe(1);
  })
});
