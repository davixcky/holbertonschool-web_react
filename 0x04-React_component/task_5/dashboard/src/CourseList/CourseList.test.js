import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';

describe('Should test CourseList Component', () => {
    let wrapper = shallow(<CourseList />); // undefined
    const listCourses = [
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

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    })

    test('should render CourseList component without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should pass empty array', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        const rows = wrapper.find('CourseListRow');
        expect(rows.length).toBe(3);
    })

    test('should pass array', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find('table CourseListRow').length).toEqual(5);
    })
})
