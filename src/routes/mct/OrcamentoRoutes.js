const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const hash = (require('../../config/jwt')).hash


const OrcamentoController = require('../../controller/mct/OrcamentoController')

router.get('/', verifyJWT, OrcamentoController.listOrcamentos)
router.get('/:id', verifyJWT, OrcamentoController.getOrcamentoById)
router.post('/', verifyJWT, OrcamentoController.createOrcamento)
router.put('/:id', verifyJWT, OrcamentoController.updateOrcamento)
router.delete('/:id', verifyJWT, OrcamentoController.deleteOrcamento)

function verifyJWT(req, res, next) {
    const token = req.headers.authorization
    jwt.verify(token, hash, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token Inválido ou Ausente'})
        next()
    })
}

module.exports = router