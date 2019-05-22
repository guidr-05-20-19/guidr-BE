exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users
      .increments()
      .primary()
      .notNullable();
    users
      .string("username", 255)
      .notNullable()
      .unique();
    users.string("password", 255).notNullable();
    users.string("name", 128);
    users.string("email", 255);
    users.string("location", 128);
    users.text("bio");
    users.boolean("professional").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
