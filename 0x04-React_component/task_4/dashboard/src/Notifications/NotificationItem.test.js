import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('Should test NotificationItem component', () => {
    let wrapper = shallow(<NotificationItem />);

    beforeEach(() => {
        wrapper = shallow(<NotificationItem />);
    })

    test('should render component works without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should pass type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        const li = wrapper.props();
        expect(li).toMatchObject({
            "data-priority": "default",
            "children": "test"
        })
    })

    test('should pass html prop', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        const li = wrapper.props();
        expect(li).toMatchObject({
            "data-priority": "default",
            "dangerouslySetInnerHTML": {
                "__html": "<u>test</u>"
            }
        })
    })

    test('should mock console.log', () => {
        const markAsReadMock = jest.fn();
        wrapper.setProps({ markAsRead: markAsReadMock });
        wrapper.find("li").simulate("click");
        expect(markAsReadMock).toHaveBeenCalled();
    })
})
