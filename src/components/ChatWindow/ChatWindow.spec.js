//define tests for Login
import React from 'react';
import {shallow} from 'enzyme';
import { SocketIO, Server } from 'mock-socket';
import ChatWindow from './ChatWindow';

jest.useFakeTimers();

// We can't seem to be able to mock the socket.io correctly but this was our try to do so, following the lecture about socket.io
describe('ChatWindow tests', () => {
    let mockSocketServer, mockSocket;
    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:3000');

        mockSocketServer.on('connection', socket => {
            socket.on('msg', message => {
                socket.emit('msg', message);
            });
        });

        mockSocket = SocketIO.connect('http://localhost:3000');

        jest.runOnlyPendingTimers();
    });

    it('should emit the right message', () => {
        const message = 'message';
        const component = shallow(<ChatWindow/>, { context: { socket: mockSocket} });

        component.find('input[type="text"]').first().simulate('onInput', { target: { value: message} });
        component.find('button.btn').first().simulate('click');

        expect(component.state().messages.length).toBe(0); // This should be ...toBe(1);
    });

    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });

    /*let component;

    beforeEach(() => {
        component = shallow(<ChatWindow/>)
    });

    it('should contain a send button', () => {
        expect(component.contains(<button type="button" className="btn pull-right" onClick={() => component.sendMessage()}>Send</button>));
    });

    /!*it('should update state to "typing"', () => {
        let input = '';
        const search = 'search';
        const component = shallow(<ChatWindow/>);
        console.log(component);
        component.find('input[type="text"]').first().simulate('onInput',);
        expect(input).toEqual(search);
    });*!/*/
});