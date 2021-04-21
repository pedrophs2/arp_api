const express = require('express')
const router = express.Router()
const jwt = require('../../middleware/JwtCheck')

const ClienteController = require('../../controller/mct/ClienteController')

router.get('/:usuario_id', ClienteController.listClientesByUsuario)
router.post('', ClienteController.createCliente)

module.exports = router