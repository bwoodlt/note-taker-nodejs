const knex = require('knex')
const config = require('../knexfile');

const db = knex(config.development)

module.exports = {
    findAll: async (table= 'notes') => await db(table),
    findById: (table = 'notes', id) => db(table).where({ id: parseInt(id) }),
    create:  (notes) => db('notes').insert(notes).then((ids) => ids[0]),
    update: (noteId, notes) => db('notes').where({ id: parseInt(noteId) }).update(notes),
    delete: (noteId) => db('notes').where({ id: parseInt(noteId) }).del()
}
