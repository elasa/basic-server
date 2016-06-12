'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')

// you can use enviroment variable: PORT=8080 node server.js on command line
const port = process.env.PORT || 3000

const server = http.createServer()

// EventEmiter
server.on('request', testRequest)
server.on('listening', testlistening)

server.listen(port)

// Callback function
function testlistening(){
  console.log('listening on port '+port);
}

function testRequest(req, res){
  let filename = path.join(__dirname, 'public','index.html')
  fs.readFile(filename, function(err, file){
    if(err){
      return res.end(err.message)
    }
    else{
      res.setHeader('Content-Type', 'text/html')
      res.end(file)
    }
  })
}
