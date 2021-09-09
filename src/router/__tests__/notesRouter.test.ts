import supertest from 'supertest';
import app from '../../server/app';

describe('NotesRouter', () => {
  it('invokes GET / and returns status OK', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual('OK!');
      });
  });
  it('invokes GET /notes and returns status It works', async () => {
    await supertest(app)
      .get('/notes')
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual('It works!');
      });
  });
});
