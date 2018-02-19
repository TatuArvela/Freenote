const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const socketIo = require('socket.io')
const mongoose = require('mongoose')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

const config = require('./config')
const utils = require('./utils')
const apiController = require('./controllers/api')
const socketController = require('./controllers/socket')


// INITIAL SERVER CONFIGURATION
const port = config.port
const appName = config.appName


// START SERVER
server.listen(port, () => {
  utils.printHeader()
})


// MONGOOSE CONFIGURATION
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://' + config.database.url + ':' + config.database.port + '/' + config.database.name, {useMongoClient: true})
  .then(({db: {databaseName}}) => console.log(`Connected to ${databaseName}`))
  .catch(err => console.log(err))


// EXPRESS CONFIGURATION
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// SOCKETS AND ROUTES
socketController(io)
app.use(apiController(io))
