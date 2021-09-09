
exports.up = function(knex) {
  return knex.schema.createTable('notes_owner', table => {
    table.increments('id').primary(),
    table.string('firstName').unique().notNullable(),
    table.timestamp('dob'),
    table.string('lastName').notNullable(),
    table.timestamp('createdDate').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes_owner')
};
