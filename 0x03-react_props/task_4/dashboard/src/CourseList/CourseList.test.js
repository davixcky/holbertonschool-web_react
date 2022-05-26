import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';

describe('Should test CourseList Component', () => {
    let wrapper = shallow(<CourseList />); // undefined

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    })

    test('should render CourseList component without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render the 5 different rows', () => {
        const rows = wrapper.find('CourseListRow');
        expect(rows.length).toBe(5);
    })
})
