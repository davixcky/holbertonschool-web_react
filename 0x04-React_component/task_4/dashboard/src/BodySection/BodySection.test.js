import { shallow } from "enzyme";
import React from "react";
import BodySection from "../BodySection/BodySection";

describe('<BodySection />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
    });


    test('should render without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    })

    test('should render one h2 tag', () => {
        expect(wrapper.find('h2').length).toEqual(1);
    });

    test('should render one p tag', () => {
        expect(wrapper.find('p').length).toEqual(1);
    });
});
