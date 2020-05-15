
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Table  from './';
describe('Table', () => {
    it('should render without issues', () => {
        const component = shallow(
            <Table />,
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });
});
        