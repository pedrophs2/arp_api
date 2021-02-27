const express = require('express')
const router = express.Router()

const AuthController = require('../../controller/mct/AuthController')

router.post('/', AuthController.login)
router.post('/novo', AuthController.createUser)
router.post('/forgot', AuthController.forgot)

module.exports = router