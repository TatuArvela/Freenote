const express = require('express')

const server = express()
const helloController = require('./controllers/hello')

const port = 4000

server.use(helloController)

server.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + '/')
})