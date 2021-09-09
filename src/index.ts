import * as http from 'http';
import app from './server/app';

const PORT = process.env.PORT || 8800;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
