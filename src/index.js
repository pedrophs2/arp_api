const express = require('express')
const server = express()
server.use(express.json())

const UserRoutes = require('./routes/UserRoutes')

server.use('/user', UserRoutes)

server.get('/', (req, res) => {
    res.send('<h1>Working...</h1>')
})

server.listen(3000, () => {
    console.log('API Online (With Nodemon) !!')
})