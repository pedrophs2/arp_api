const express = require('express')
const router = express.Router()

const UsuarioController = require('../../controller/mct/UsuarioController')

router.get('/', UsuarioController.listUsers)
router.get('/:id', UsuarioController.getUser)
router.post('/', UsuarioController.createUser)
router.put('/:id', UsuarioController.updateUser)
router.delete('/:id', UsuarioController.deleteUser)


module.exports = router