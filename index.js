const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const server = express()
const path = require('path')

const db = require('./src/config/database')


server.use(express.json())
server.use(cors())
server.use(bodyParser.json())

//Business Cook
const UserRoutes = require('./src/routes/bck/UserRoutes')

//Mercado do Construtor
const AuthRoutes = require('./src/routes/mct/AuthRoutes')
const UsuarioRoutes = require('./src/routes/mct/UsuarioRoutes')
const OrcamentoRoutes = require('./src/routes/mct/OrcamentoRoutes')
const OrcamentoPDFRoutes = require('./src/routes/mct/PDF/OrcamentoPDFRoutes')
const ClienteRoutes = require('./src/routes/mct/ClienteRoutes')

//WEB
const WebRouter = require('./src/routes/web/WebRoutes')

//Business Cook
server.use('/api/bck/user', UserRoutes)

//Mercado do Construtor
server.use('/api/mct/auth', AuthRoutes)
server.use('/api/mct/usuario', UsuarioRoutes)
server.use('/api/mct/orcamento', OrcamentoRoutes)
server.use('/api/mct/pdf/orcamento', OrcamentoPDFRoutes)
server.use('/api/mct/cliente', ClienteRoutes)

//WEB
server.use('/', WebRouter)

server.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'web/index.html'))
})

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\'')
})