import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging.js';
import Login from '../Login/Login.js';


describe("Testing the <WithLogging /> Component", () => {
    let log = jest.spyOn(console, 'log');


    test("Renders the correct children with pure html as a child", () => {
        let wrapper = shallow(
            <WithLogging>
                <p>simple phrase</p>
            </WithLogging>
        );
        expect(log).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(log).toHaveBeenCalledWith('Component Component is going to unmount');
    });

    test("Renders the correct children with <Login /> Component as a child", () => {
        let wrapper = shallow(
            <WithLogging>
                <Login />
            </WithLogging>
        );
        expect(log).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(log).toHaveBeenCalledWith('Component Login is going to unmount');
    });

});
