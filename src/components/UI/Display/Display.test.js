import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from './Display';

configure({adapter: new Adapter()});

describe('<Display>', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Display/>));
    it('should contains "Current value is undefined" as default value for aria-label attribute', () => {
        expect(wrapper.find('span').prop('aria-label')).toEqual('Current value is undefined');
    });

    it('should contains "Current value is 5" for aria-label attribute when set number 5 as result prop value', () => {
        wrapper.setProps({result: 5});
        expect(wrapper.find('span').prop('aria-label')).toEqual('Current value is 5');
    });

    it('should contains 5 as <span> content when set 5 as result prop value', () => {
        wrapper.setProps({result: 5});
        expect(wrapper.find('span').text()).toEqual('5')
    });
})