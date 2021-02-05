const express = require('express')
const server = express()
const path = require('path')

const location = path.dirname

server.get('/redirect', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../web/redirect.html'))
})

module.exports = server