
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',(table) => {
    table.increments()
    table.text('name').notNullable
    table.text('password').notNullable
    table.text('email')
    table.text('user_type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
