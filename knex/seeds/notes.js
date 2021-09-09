const getRandom = require('../generateRandom')
const INITIAL_NOTE_COUNT = 10;

exports.seed = function(knex) {
  return knex('notes_owner').del()
    .then(function () {
      return knex('notes_owner').insert(
        Array.from({ length: 2 }, () => getRandom.generateNotesOwner())
      ).then((owner) => knex('notes').insert(Array.from({length: 10}, () => getRandom.generateNotes(owner))))
    });
};
