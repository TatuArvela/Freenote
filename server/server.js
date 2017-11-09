const express = require('express')

const server = express()
const config = require('./config')
const apiController = require('./controllers/api')


// CONFIGURATION
const port = config.port


// CONTROLLERS
server.use(apiController)


// START
server.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + '/')
})