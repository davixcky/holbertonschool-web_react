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

  test('should not pass anything to array', () => {
    expect(wrapper.find("p.empty-notifications").text()).toEqual('No new notification for now');
  })


  test("Notifications renders the text Here is the list of notifications", () => {
    const text = "Here is the list of notifications";
    expect(wrapper.find(".Notifications p").at(0).text().trim()).toEqual(text);
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

  test('should verify pass an empty array', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />)
    expect(wrapper.find("p.empty-notifications").text()).toEqual('No new notification for now');
  })

  test('should pass list notification', () => {
    const listNotifications = [{ id: 1, type: 'success', value: 'test', html: { __html: 'test' } }];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />)
    expect(wrapper.find("ul").at(0).children().length).toEqual(1);
  })
});
