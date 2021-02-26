const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const hash = (require('../../config/jwt')).hash

const UsuarioController = require('../../controller/mct/UsuarioController')

router.get('/', verifyJWT, UsuarioController.listUsers)
router.get('/:id', verifyJWT, UsuarioController.getUser)
router.post('/', verifyJWT, UsuarioController.createUser)
router.put('/:id', verifyJWT, UsuarioController.updateUser)
router.delete('/:id', verifyJWT, UsuarioController.deleteUser)

function verifyJWT(req, res, next) {
    const token = req.headers.authorization
    jwt.verify(token, hash, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token Inválido ou Ausente'})
        next()
    })
}

module.exports = router