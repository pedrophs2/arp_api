import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes';

const server = express();

server.use(express.json());
server.use(cors())
server.use(bodyParser.json())
server.use(routes);

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\' (With TypeScript)')
});
