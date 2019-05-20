const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = server => {
  server.use(morgan('short')); //3rd party logging
  server.use(helmet()); //3rd party security
  server.use(express.json());
  server.use(cors()); //3rd party
};