import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes';
import path from 'path'

const server = express();

server.use(express.json());
server.use(cors())
server.use(bodyParser.json())
server.use(routes);
server.use('/public', express.static(`${__dirname}/dist/frontend`));

server.get('/home', async (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/dist/frontend/index.html`))
})

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\' (With TypeScript)')
});
