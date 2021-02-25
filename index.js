const express = require('express')
const server = express()
const path = require('path')
const db = require('./src/config/database')

server.use(express.json())

const UserRoutes = require('./src/routes/bck/UserRoutes')
const UsuarioRoutes = require('./src/routes/mct/UsuarioRoutes')
const WebRouter = require('./src/routes/web/WebRoutes')

server.use('/api/bck/user', UserRoutes)
server.use('/api/mct/user', UsuarioRoutes)
server.use('/', WebRouter)

server.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'web/index.html'))
})

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs.com.br/api/\'project\'/\'class\'/\'endpoint\'')
})