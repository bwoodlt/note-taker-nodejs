const faker = require('faker');

const generateNotes = () => ({
  title: faker.lorem.text(),
  description: faker.lorem.sentences(),
  creationDate: faker.date.recent(),
  modificationDate: faker.date.recent()
});

const generateNotesOwner = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.firstName(),
  createdAt: faker.date.recent(),
  dob: faker.date.past()
});

module.exports = { generateNotes, generateNotesOwner };
