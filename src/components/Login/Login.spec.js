import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

//define tests for Login
describe('Login tests', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Login/>);
    });

    it('should contain an input type=text', () => {
        expect(component.contains(<input type="text" name="user" id="user" onChange={component.updateName} />));
    });
});
