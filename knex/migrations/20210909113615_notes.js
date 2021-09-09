
exports.up = function(knex) {
  return knex.schema
  .createTable('notes', (table) => {
    table.increments('id').primary(),
    table.string('description').notNullable(),
    table.string('title').unique().notNullable(),
    table.timestamp('creationDate').defaultTo(knex.fn.now()),
    table.timestamp('modificationDate').defaultTo(knex.fn.now())
    table.integer('owner_id').references('id').inTable('notes_owner').notNull().onDelete('cascade')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes')
};
