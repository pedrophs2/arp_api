const express = require('express')
const router = express.Router()
const jwt = require('../../middleware/JwtCheck')


const OrcamentoController = require('../../controller/mct/OrcamentoController')

router.get('/:usuario_id', jwt.verifyJWT, OrcamentoController.listOrcamentos)
router.get('/:id', jwt.verifyJWT, OrcamentoController.getOrcamentoById)
router.post('/', jwt.verifyJWT, OrcamentoController.createOrcamento)
router.put('/:id', jwt.verifyJWT, OrcamentoController.updateOrcamento)
router.delete('/:id', jwt.verifyJWT, OrcamentoController.deleteOrcamento)

module.exports = router