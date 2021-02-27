const express = require('express')
const router = express.Router()

const AuthController = require('../../controller/mct/AuthController')

router.post('/', AuthController.login)
router.post('/novo', AuthController.createUser)

module.exports = router