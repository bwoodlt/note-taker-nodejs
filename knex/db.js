const knex = require('knex')
const config = require('../knexfile');

const db = knex(config.development)

module.exports = {
    findAll: async (table= 'notes') => await db(table),
    findById: async(table = 'notes', id) => await db(table).where({ id: parseInt(id) }),
    create:  async (notes) => await db('notes').insert(notes),
    update: async (noteId, notes) => await db('notes').where({ id: parseInt(noteId) }).update(notes),
    delete: async (noteId) => await db('notes').where({ id: parseInt(noteId) }).del()
}
