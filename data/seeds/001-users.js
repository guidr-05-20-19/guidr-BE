exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Tristan", email: "tristan.grovender@gmail.com", password: "pass" },
        { id: 2, name: "Azra", email: "azra.panjwani@gmail.com", password: "pass" },
        { id: 3, name: "Hung", email: "hung.pham@gmail.com", password: "pass" },
      ]);
    });
};
