const faker = require('faker');

const generateNotes = (owner) => ({
  title: faker.lorem.text(),
  description: faker.lorem.sentences(),
  owner_id: faker.random.arrayElement(owner),
  creationDate: faker.date.recent(),
  modificationDate: faker.date.recent()
});

const generateNotesOwner = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.firstName(),
  createdDate: faker.date.recent(),
  dob: faker.date.past()
});

module.exports = { generateNotes, generateNotesOwner };
