'use strict'

const http = require('http')

// you can use enviroment variable: PORT=8080 node server.js on command line
const port = process.env.PORT || 3000

const server = http.createServer()

// EventEmiter
server.on('request', testRequest)
server.on('listening', testlistening)

server.listen(port)

// Callback function
function testlistening(){
  console.log('listening on port '+port)
}

function testRequest(req, res){
  res.end('Adding tag 002')
}
