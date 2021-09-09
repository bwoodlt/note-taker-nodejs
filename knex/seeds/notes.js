const getRandom = require('../generateRandom')
const INITIAL_NOTE_COUNT = 10;

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert(
        Array.from({ length: INITIAL_NOTE_COUNT }, () => getRandom.generateNotes())
      );
    });
};
