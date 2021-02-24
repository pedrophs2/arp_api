const express = require('express')
const router = express.Router()

const UserController = require('../../controller/bck/UserController')

router.get('/', UserController.listUsers)
router.post('/', UserController.saveUser)

module.exports = router