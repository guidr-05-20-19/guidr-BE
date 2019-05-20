const express = require('express');
const configMiddleware = require('./config/middleware');
// const Users = require('./helpers/users-model');
const configureUserRoutes = require('./config/routes.js');
// adventure routes

// routes config

const server = express();

// middleware goes here
configMiddleware(server);
configureUserRoutes(server);

// test get
// server.get('/users', (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

// server test
server.get('/', (req, res) => {
    res.send('I\'m alive?')
  });
  
  
  module.exports = server 