import { Router } from 'express';
import OrcamentoController from '../../controllers/mct/orcamento.controller';
import JwtChecker from '../../middleware/JwtChecker';

const orcamentoRoutes = Router();

orcamentoRoutes.get('/:usuario_id', JwtChecker.verifyJwt, OrcamentoController.listOrcamentos)
orcamentoRoutes.get('/:usuario_id/:orcamento_id', JwtChecker.verifyJwt, OrcamentoController.getOrcamentoById)
orcamentoRoutes.post('/', JwtChecker.verifyJwt, OrcamentoController.createOrcamento)
orcamentoRoutes.put('/:id', JwtChecker.verifyJwt, OrcamentoController.updateOrcamento)
orcamentoRoutes.delete('/:id', JwtChecker.verifyJwt, OrcamentoController.deleteOrcamento)

export default orcamentoRoutes
