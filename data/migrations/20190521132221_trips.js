exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", trips => {
    trips.increments();
    // foreign key
    trips
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    trips.string("trip_type", 128).notNullable();
    trips.string("title", 128);
    trips.string("location", 128).notNullable();
    trips.string("duration", 128);
    trips.text("description");
    trips.boolean("professional").defaultTo(false);
    trips.string("date", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trips");
};
