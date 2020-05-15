
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Pincode  from './index';
describe('Pincode', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Pincode />,
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });
});
        