const chalk = require('chalk')
const connections = []

const socketController = function (io) {

  // CONNECT
  io.on('connection', (socket) => {
    var address = socket.conn.remoteAddress

    console.log(chalk.green(chalk.bold('+     Connecting:  ') + socket.id + '  ' + address))
    connections.push(socket)

    // DISCONNECT
    socket.on('disconnect', function(){
      console.log(chalk.yellow(chalk.bold('-  Disconnecting:  ') + socket.id + '  ' + address))
    });

  })
}

module.exports = socketController
