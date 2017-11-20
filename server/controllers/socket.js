const connections = []

const socketController = function (io) {

  // CONNECT
  io.on('connection', (socket) => {
    console.log('Connected to socket: ' + socket.id)
    connections.push(socket)


    // DISCONNECT
    socket.on('disconnect', function(){
      console.log('Disconnected from socket: '+ socket.id);
    });

  })
}

module.exports = socketController
