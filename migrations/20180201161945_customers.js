
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) =>{
    table.increments()
    table.text('name').notNullable
    table.text('customer_type').notNullable
    table.text('email')
    table.text('address')
    table.text('phone_number')

  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('customers')
};
