
exports.up = function(knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments(),
    table.string('title').unique().notNullable(),
    table.string('description').notNullable(),
    table.timestamp('creationDate').defaultTo(knex.fn.now()),
    table.timestamp('modificationDate').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('notes')
};
