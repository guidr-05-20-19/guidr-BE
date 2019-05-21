require('dotenv').config();
const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('./dbConfig');
const jwt = require('jsonwebtoken');
const hashPassword = require('../helpers/hashPassword');



const { authenticate } = require('../auth/authenticate');


module.exports = server => {
  server.post('/register', register);
  server.post('/login', login);
  server.get('/trips', authenticate);
  // server.get('/trips', authenticate, getGuidr);  
};




function register(req, res) {
  // implement user registration
  const userInfo = req.body;

  const hash = hashPassword(userInfo.password);

  userInfo.password = hash;

  db('users')
    .insert(userInfo)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
}

function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}

function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        // login is successful
        // create the token
        const token = generateToken(user);

        res.status(200).json({ message: `${user.username}`, token });
      } else {
        res.status(401).json({ you: 'shall not pass!!' });
      }
    })
    .catch(err => res.status(500).json(err));
}