import supertest from 'supertest';
import app from '../../server/app';
import { NotesPayload } from '../../types';
const db = require('../../../knex/db');

const notes: NotesPayload[] = [
  {
    title: 'test note',
    owner_id: 3,
    description: 'test description',
    creationDate: new Date(),
    modificationDate: new Date()
  }
];
describe('NotesRouter', () => {
  beforeEach(() => {
    jest.spyOn(db, 'findAll').mockResolvedValue(Promise.resolve(notes));
    jest.spyOn(db, 'findById').mockResolvedValue(Promise.resolve([{ id: 4 }]));
    jest.spyOn(db, 'update').mockResolvedValue(Promise.resolve(1));
    jest.spyOn(db, 'delete').mockResolvedValue(Promise.resolve(1));
    jest.spyOn(db, 'create').mockResolvedValue(Promise.resolve(13));
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('invokes GET / and returns status OK', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual('OK!');
      });
  });
  it('invokes GET /notes and returns at least one note', async () => {
    await supertest(app)
      .get('/notes')
      .expect(200)
      .then((response) => {
        const notes = response.body;
        expect(notes).toHaveLength(1);
        expect(notes[0].owner_id).toEqual(3);
      });
  });
  it('invokes GET /notes/:id and returns only one note', async () => {
    await supertest(app)
      .get('/notes/3')
      .expect(200)
      .then((response) => {
        const note = response.body;
        expect(note[0].id).toEqual(4);
      });
  });
  it('invokes POST /notes, creates a new note and return noteId', async () => {
    let note = {
      description: 'Test note description',
      title: 'Test note title',
      owner_id: 3
    };
    await supertest(app)
      .post('/notes')
      .send(note)
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.body).toEqual({ created: true, record: 13 });
      });
  });
  it('invokes UPDATE /notes/:id and returns { updated: true } indicating successful update', async () => {
    await supertest(app)
      .put('/notes/3')
      .send({ title: 'New Note', description: 'New Description' })
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ updated: true });
      });
  });
  it('invokes DELETES /notes/:id and returns { noteRemoved: true } indicating successful deletion', async () => {
    await supertest(app)
      .del('/notes/2')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ noteRemoved: true });
      });
  });
});
