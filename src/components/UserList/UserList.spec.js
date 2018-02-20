// The socket.io mock must be implemented to test UserList
describe('UserList tests', () => {
    /* it('basic test', (done) => {
        const mockServer = new Server('http://localhost:8080');
        mockServer.on('connection', server => {
            mockServer.emit('userlist', 'test message 1');
            mockServer.emit('userlist', 'test message 2');
        });

        /!*
          This step is very important! It tells our chat app to use the mocked
          websocket object instead of the native one. The great thing
          about this is that our actual code did not need to change and
          thus is agnostic to how we test it.
        *!/
        window.io = SocketIO;

        // Now when Chat tries to do io() or io.connect()
        // it will use MockSocketIO object
        let chatApp = new Chat();

        setTimeout(() => {
            const messageLen = chatApp.messages.length;
            expect.equal(messageLen, 2, '2 messages where sent from the server');
            mockServer.stop(done);
        }, 100);
    });


    let component;

    beforeEach(() => {
        component = shallow(<UserList/>);
    });

    it('should contain a div : User list', () => {
        expect(component.contains(<div><b>User list:</b></div>));
    });*/
});