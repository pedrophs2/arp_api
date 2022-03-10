import cors from 'cors'
import routes from './routes';
import path from 'path'
import dotenv from 'dotenv'

/*Swagger Imports*/
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './config/swagger.options'

const express = require('express')
const bodyParser = require('body-parser')

//Swagger Config
const swaggerDocs = swaggerJsDoc(swaggerOptions)

//Server Startup
dotenv.config({path: './.env'})
const server = express();

//API Types
server.use(cors())

server.use(bodyParser.json({limit: process.env.JSON_LIMIT}));
server.use(bodyParser.urlencoded({limit: process.env.JSON_LIMIT, extended: true}));

//API Routes
server.use(routes);
server.use(express.static(`${__dirname}/dist/mercado-adm`));

server.set('view engine', 'pug')

//Swagger Route
server.use(process.env.SWAGGER_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//ArpWeb
server.get('', async(req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/dist/mercado-adm/index.html`))
})

server.get('*', async(req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}/dist/mercado-adm/index.html`))
})

//API Startup (PORT: 3000)
server.listen(process.env.PORT, () => {
    console.log('API ONLINE => https://arp-api.herokuapp.com/api/\'project\'/\'class\'/\'endpoint\'')
    console.log(`Dev Server => http://localhost:${process.env.PORT}/api/\'project\'/\'class\'/\'endpoint\'`)
    console.log(`Environment Status: ${process.env.ENV_STATUS}`)
});
