exports.seed = function(knex, Promise) {
  const hashPassword = require("../../helpers/hashPassword");
  const hash = hashPassword("pass");

  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Tristan",
          password: hash,
          name: "Tristan Grovender",
          email: "tristangrovender@gmail.com",
          location: "Minneapolis, Minnesota",
          bio: "I'm a bio!!",
          professional: false
        },
        {
          id: 2,
          username: "Azra",
          password: hash,
          name: "Azra Panjwani",
          email: "azrapanjwani@gmail.com",
          location: "San Francisco, California",
          bio: "I'm a bio!!",
          professional: false
        },
        {
          id: 3,
          username: "Hung",
          password: hash,
          name: "Hung Pham",
          email: "hungpham@gmail.com",
          location: "Washington, D.C.",
          bio: "I'm a bio!!",
          professional: false
        }
      ]);
    });
};
