import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes';
import path from 'path'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

//Swagger Configuration - Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'ArpAPI',
            description: 'API de testes para projetos da ArpDevs',
            contact: {
                name: 'ArpDevs'
            },
            servers: ['http://localhost:3000/', 'http://arpdevs.com.br/'],
            version: '1.0.0'
        }
    },
    apis: ['**/*.ts']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)


//Server Startup
const server = express();

//API Types
server.use(express.json());
server.use(cors())
server.use(bodyParser.json())

//API Routes
server.use(routes);
server.use('/public', express.static(`${__dirname}/dist/frontend`));
server.use('/csn/public', express.static(`${__dirname}/dist/casa-nova`));

//Swagger Route
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// server.get('/mct/admin', async (req: any, res: any) => {
//     res.sendFile(path.join(`${__dirname}/dist/frontend/index.html`))
// })

// server.get('/casanova', async (req: any, res: any) => {
//     res.sendFile(path.join(`${__dirname}/dist/casa-nova/index.html`))
// })

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\'')
});
