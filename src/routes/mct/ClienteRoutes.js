const express = require('express')
const router = express.Router()
const jwt = require('../../middleware/JwtCheck')

const ClienteController = require('../../controller/mct/ClienteController')

router.get('/:usuario_id', jwt.verifyJWT, ClienteController.listClientesByUsuario)
router.get('/:usuario_id/:cliente_id', jwt.verifyJWT, ClienteController.listClientesByUsuarioCliente)
router.post('', jwt.verifyJWT, ClienteController.createCliente)
router.put('', jwt.verifyJWT, ClienteController.updateCliente)

module.exports = router