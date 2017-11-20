const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

const config = require('./config')
const apiController = require('./controllers/api')
const socketController = require('./controllers/socket')
// const noteModel = require('./models/noteModel')


// INITIAL SERVER CONFIGURATION
const port = config.port
server.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + '/')
})


// MONGOOSE CONFIGURATION
// TEMP STUFF
var nextId = 1
var entries = [
  {
    id: 0,
    title: "Title",
    text: "Text",
    deleted: false
  }
]


// EXPRESS CONFIGURATION
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// SOCKETS AND ROUTES
socketController(io)
app.use(apiController(io, nextId, entries))
