const express = require('express');
const configMiddleware = require('./config/middleware');
// user routes
// adventure routes

// routes config

const server = express();

// middleware goes here
configMiddleware(server);

// server test
server.get('/', (req, res) => {
    res.send('I\'m alive?')
  });
  
  
  module.exports = server 