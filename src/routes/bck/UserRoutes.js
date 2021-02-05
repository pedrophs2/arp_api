const express = require('express')
const router = express.Router()

const UserController = require('../../controller/UserController')

router.post('/', UserController.create)
router.get('/', UserController.list)

module.exports = router