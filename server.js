const express = require("express");
const configMiddleware = require("./config/middleware");
const configureRoutes = require("./config/routes");
const configureUserRoutes = require("./config/userRoutes");
const configureTripRoutes = require("./config/tripRoutes");

const server = express();

// middleware goes here
configMiddleware(server);
configureRoutes(server);
configureUserRoutes(server);
configureTripRoutes(server);

// server test
server.get("/", (req, res) => {
  res.send("Hello Azra and Hung!!");
});

module.exports = server;
