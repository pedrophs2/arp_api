const express = require('express')
const server = express()
server.use(express.json())

const UserRoutes = require('./src/routes/bck/UserRoutes')

server.use('/api/bck/user', UserRoutes)

server.get('/', (req, res) => {
    res.send(
        '<h1>Working ! Only API for now...</h1>' +
        '<br>' + 
        'Check our GitHub Documentation: <a href="https://github.com/pedrophs2/arp_api">Click Here !</a>'
        )
})

server.listen(3000, () => {
    console.log('API ONLINE => http://arpdevs-com-br.umbler.net/api/\'project\'/\'class\'/\'endpoint\'')
})