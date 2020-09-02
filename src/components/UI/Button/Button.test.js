import React from 'react';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button>', () => {
    const props = {
        onClick: jest.fn()
    }
    let wrapper;
    beforeEach(() => wrapper = shallow(<Button {...props} />));

    describe('testing props', () => {
        it('should has event listener for click', () => {
            expect(wrapper.prop('onClick')).toEqual(props.onClick);
        });

        it('should contains undefined as default value for value prop', () => {
            expect(wrapper.prop('value')).toEqual(undefined);
        });
    });


    describe('testing component attrs', () => {
        it('should contains as undefined as default value for aria-label attr', () => {
            expect(wrapper.prop('aria-label')).toEqual(undefined);
        });

        it('should contains "Random text" value for aria-label attr if set this text for value prop', () => {
            wrapper.setProps({value: 'Random text'});
            expect(wrapper.prop('aria-label')).toEqual('Random text');
        });
    })

    describe('testing component\'s content', () => {
        it('should contains empty content as default value for this component', () => expect(wrapper.text()).toEqual(''));

        it('should contains "Random text" value if set this text for value prop', () => {
            wrapper.setProps({value: 'Random text'});
            expect(wrapper.text()).toEqual('Random text');
        });
    });
});