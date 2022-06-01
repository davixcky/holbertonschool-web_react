import { shallow } from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe('<BodySectionWithMarginBottom />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BodySectionWithMarginBottom title="test title jest"><p>test</p></BodySectionWithMarginBottom>);
    });

    test('should render without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
        console.log(wrapper.debug());
    });

    test('BodySection should be have property title="test from jest"', () => {
        wrapper.setProps({ title: "test from jest" });
        const title = wrapper.find('BodySection').prop('title').toString();
        expect(title).toEqual("test from jest");
    });

    test('should render one p tag', () => {
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('p').text()).toEqual('test');
    });

});
