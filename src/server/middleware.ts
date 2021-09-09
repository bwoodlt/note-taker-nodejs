import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import notesRouter from '../router/notesRouter';

export default (app: express.Application) =>
  app
    .use(helmet())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(notesRouter);
