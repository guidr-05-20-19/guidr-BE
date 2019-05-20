exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "Tristan", password: "pass" },
        { id: 2, username: "Azra", password: "pass" },
        { id: 3, username: "Hung", password: "pass" },
        { id: 4, username: "Troy", password: "pass" },
        { id: 5, username: "Damola", password: "pass" },
        { id: 6, username: "George", password: "pass" },
        { id: 7, username: "John", password: "pass" }
      ]);
    });
};
