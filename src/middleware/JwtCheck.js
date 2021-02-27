const jwt = require('jsonwebtoken')
const hash = (require('../config/jwt')).hash

function verifyJWT(req, res, next) {
    const token = req.headers.authorization
    jwt.verify(token, hash, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token Inválido ou Ausente'})
        next()
    })
}

exports.verifyJWT = verifyJWT