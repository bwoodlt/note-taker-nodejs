import express from 'express';

import middleware from './middleware';

const app = express();

middleware(app);

export default app;
