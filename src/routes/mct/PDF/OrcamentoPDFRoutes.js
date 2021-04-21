const express = require('express')
const router = express.Router()

const OrcamentoPDFServices = require('../../../services/mct/PDF/OrcamentoPDFServices')
// const OrcamentoPDFController = require('../../../controller/mct/PDF/OrcamentoPDFController')

router.get('/:id', OrcamentoPDFServices.generatePDFOrcamento)

module.exports = router