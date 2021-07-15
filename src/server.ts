import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes';
import path from 'path'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config/swagger.options'

//Swagger Config
const swaggerDocs = swaggerJsDoc(swaggerOptions)

//Server Startup
const server = express();

//API Types
server.use(express.json());
server.use(cors())
server.use(bodyParser.json())

//API Routes
server.use(routes);
server.use('/mct/public', express.static(`${__dirname}/hosted_apps/mercado-adm`));
server.use('/csn/public', express.static(`${__dirname}/hosted_apps/casa-nova`));
server.use('/assets/public', express.static(`${__dirname}/hosted_apps/arp-web`));

//Swagger Route
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//Mercado Construtor (Admin)
server.get('/mct/admin', async (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/hosted_apps/mercado-adm/index.html`))
})

//CasaNova
server.get('/casanova', async (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/hosted_apps/casa-nova/index.html`))
})

//ArpWeb
server.get('', async(req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/hosted_apps/arp-web/index.html`))
})

//API Startup (PORT: 3000)
server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\'')
});
