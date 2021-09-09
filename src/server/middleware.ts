import express from 'express';
import helmet from 'helmet';
import notesRouter from '../router/notesRouter';

export default (app: express.Application) => app.use(helmet()).use(express.json()).use(notesRouter);
