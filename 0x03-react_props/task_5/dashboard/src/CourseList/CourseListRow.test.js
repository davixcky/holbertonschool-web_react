import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

describe('Should test CourseListRow Component', () => {
    let wrapper = shallow(<CourseListRow isHeader textFirstCell='Hello test' />); // undefined

    beforeEach(() => {
        wrapper = shallow(<CourseListRow isHeader textFirstCell='Hello test' />);
    })

    test('verify it renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should check if isHeader is true', () => {
        const cell = wrapper.find('th');
        expect(cell.length).toBe(1);
        expect(cell.prop('colSpan')).toBe('2');
    })

    test('should test the component renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(
            <CourseListRow
                isHeader
                textFirstCell='Hello test'
                textSecondCell='Second text'
            />
        );
        const cell = wrapper.find('th');
        expect(cell.length).toBe(2);
        expect(cell.at(0).text().trim()).toBe('Hello test');
        expect(cell.at(1).text().trim()).toBe('Second text');
    })
})
