import { Router, Request, Response } from 'express';
// import knex from 'knex';
import { NotesRequestPayload } from '../types';
const db = require('../../knex/db');

const notesRouter: Router = Router();
const entityName = '/notes';

notesRouter.get('/', (_, res: Response) => res.json({ status: 'OK!' }));

notesRouter.get(entityName, async (req: Request, res: Response) => {
  const notes = await db.findAll();
  return res.send(notes);
});

notesRouter.post(entityName, async (req: Request<NotesRequestPayload>, res: Response) => {
  const { body } = req;
  return res.send({ body });

  // TODO: Save body to db
  // Unit test
});

export default notesRouter;
