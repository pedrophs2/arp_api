import cors from 'cors'
import routes from './routes';
import path from 'path'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config/swagger.options'

const express = require('express')
const bodyParser = require('body-parser')

//Swagger Config
const swaggerDocs = swaggerJsDoc(swaggerOptions)
const NOT_FOUND = 404

//Server Startup
const server = express();

//API Types
server.use(cors())

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//API Routes
server.use(routes);
server.use(express.static(`${__dirname}/dist/mercado-adm`));
// server.use('/csn/public', express.static(`${__dirname}/hosted_apps/casa-nova`));
// server.use('/assets/public', express.static(`${__dirname}/hosted_apps/arp-web`));

server.set('view engine', 'pug')

//Swagger Route
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//Mercado Construtor (Admin)
// server.get('/mct/admin', async (req: any, res: any) => {
//     res.sendFile(path.join(`${__dirname}/dist/mercado-adm/index.html`))
// })

//CasaNova
// server.get('/casanova', async (req: any, res: any) => {
//     res.sendFile(path.join(`${__dirname}/hosted_apps/casa-nova/index.html`))
// })

//ArpWeb
server.get('', async(req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/dist/mercado-adm/index.html`))
})

server.get('*', async(req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/dist/mercado-adm/index.html`))
})

//API Startup (PORT: 3000)
server.listen(process.env.PORT || 3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\'')
    console.log('Dev (AutoDeploy Works !) => http://localhost:3000/api/\'project\'/\'class\'/\'endpoint\'')
});
