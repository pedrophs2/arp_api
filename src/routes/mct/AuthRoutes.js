const express = require('express')
const router = express.Router()

const AuthController = require('../../controller/mct/AuthController')

router.post('/', AuthController.login)
// router.get('/:id', UsuarioController.getUser)
// router.post('/', UsuarioController.createUser)
// router.put('/:id', UsuarioController.updateUser)
// router.delete('/:id', UsuarioController.deleteUser)


module.exports = router