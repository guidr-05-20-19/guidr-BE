exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users
      .increments()
      .primary()
      .notNullable();
    
      users
      .string('name', 128)
      .notNullable();

      users
        .string('email', 255)
        .notNullable()
        .unique();

      users
      .string('password', 255)
      .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  