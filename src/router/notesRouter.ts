import { Router, Request, Response } from 'express';
import { NotesRequestPayload } from '../types';

const notesRouter: Router = Router();
const entityName = '/notes';

notesRouter.get('/', (_, res: Response) => res.json({ status: 'OK!' }));

notesRouter.get(entityName, async (req: Request, res: Response) => {
  // TODO: Get Notes from DB
  // send payload to caller
  return res.json({ status: 'It works!' });
});

notesRouter.post(entityName, async (req: Request<NotesRequestPayload>, res: Response) => {
  const { body } = req;
  return res.send({ body });

  // TODO: Save body to db
  // Unit test
});

export default notesRouter;
