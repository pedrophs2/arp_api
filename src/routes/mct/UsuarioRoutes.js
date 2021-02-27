const express = require('express')
const router = express.Router()
const jwt = require('../../middleware/JwtCheck')


const UsuarioController = require('../../controller/mct/UsuarioController')

router.get('/', jwt.verifyJWT, UsuarioController.listUsers)
router.get('/:id', jwt.verifyJWT, UsuarioController.getUser)
router.post('/', jwt.verifyJWT, UsuarioController.createUser)
router.put('/:id', jwt.verifyJWT, UsuarioController.updateUser)
router.delete('/:id', jwt.verifyJWT, UsuarioController.deleteUser)

module.exports = router