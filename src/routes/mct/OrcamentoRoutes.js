const express = require('express')
const router = express.Router()

const OrcamentoController = require('../../controller/mct/OrcamentoController')

router.get('/', OrcamentoController.listOrcamentos)
router.get('/:id', OrcamentoController.getOrcamentoById)
router.post('/', OrcamentoController.createOrcamento)
router.put('/:id', OrcamentoController.updateOrcamento)
router.delete('/:id', OrcamentoController.deleteOrcamento)

module.exports = router