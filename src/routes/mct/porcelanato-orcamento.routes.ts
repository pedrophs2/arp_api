import { Router } from 'express';
import JwtChecker from '../../middleware/JwtChecker'
import PorcelanatoOrcamentoController from '../../controllers/mct/porcelanato-orcamento.controller'

const porcelanatoOrcamentoRouter = Router();

porcelanatoOrcamentoRouter.post('/', JwtChecker.verifyJwt, PorcelanatoOrcamentoController.createPorcelanatoOrcamento)
porcelanatoOrcamentoRouter.get('/:porcelanato_id', JwtChecker.verifyJwt, PorcelanatoOrcamentoController.getPorcelanatosByOrcamento)

export default porcelanatoOrcamentoRouter