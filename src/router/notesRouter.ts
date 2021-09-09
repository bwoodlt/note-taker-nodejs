import { Router, Request, Response } from 'express';
import schemaValidation from '../utils/validation';
// import knex from 'knex';
import { NotesRequestPayload } from '../types';
const db = require('../../knex/db');

const notesRouter: Router = Router();
const entityName = '/notes';

notesRouter.get('/', (_, res: Response) => res.json({ status: 'OK!' }));

notesRouter
  .get(entityName, async (req: Request, res: Response) => {
    const notes = await db.findAll();
    return res.send(notes);
  })
  .get(`${entityName}/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const note = await db.findById('notes', id);
      if (!note) {
        return res.send(`Unable to find not with id ${id}`);
      }
      return res.send(note);
    } catch (error) {
      return res.status(500).send(error);
    }
  })
  .post(entityName, async (req: Request<NotesRequestPayload>, res: Response) => {
    const { body } = req;

    try {
      // check the user exist
      const user = await db.findById('notes_owner', body.owner_id);

      if (!user || !user.length) {
        return res.status(500).send('Unable to find notes owner.');
      }

      const notes = {
        ...body,
        owner_id: user[0].id, // this will generally be the foreign key on the `notes` table belonging to `notes_owner`
        createdDate: new Date(),
        modificationDate: new Date()
      };

      schemaValidation.validateNotesSchema(notes);

      const create = await db.create(notes);
      return res.send({ create });
    } catch (error) {
      return res.status(400).send(error);
    }
  })
  .put(`${entityName}/:id`, async (req: Request, res: Response) => {
    const {
      params: { id },
      body
    } = req;

    schemaValidation.validateNotesSchema(body);
    const notes = await db.update(id, body);
    return res.send(notes);
  })
  .delete(`${entityName}/:id`, async (req: Request, res: Response) => {
    const {
      params: { id }
    } = req;

    const notesRemoved = await db.delete(id);
    return res.send(notesRemoved);
  });

export default notesRouter;
