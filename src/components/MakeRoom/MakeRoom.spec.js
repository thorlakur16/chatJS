//define tests for Login
import React from 'react';
import {shallow} from 'enzyme';
import MakeRoom from './MakeRoom';

describe('MakeRoom tests', () => {
    let component;
    beforeEach(() => {
        component = shallow(<MakeRoom/>);
    });

    it('should contain a label Make new room:', () => {
        expect(component.contains(<label>Make new room:</label>));
    });
});