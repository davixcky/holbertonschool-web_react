import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';
import holberton_logo from "../assets/HolbertonLogo.jpg";


describe('Should test Header Component', () => {

    let wrapper = shallow(<Header />); // undefined

    beforeEach(() => {
        wrapper = shallow(<Header />);
    })

    test('verify it renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Verify that the components renders img', () => {

        const headerImg = wrapper.find('img').prop("src");
        expect(headerImg).toEqual(holberton_logo);
    })

    test('Verify that the components renders h1 tag', () => {
        const h1Content = wrapper.find('h1').text().trim();
        expect(h1Content).toBe("School dashboard");
    })
})
