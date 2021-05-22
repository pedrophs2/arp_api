import { Router } from 'express';
import JwtChecker from '../../middleware/JwtChecker'
import PorcelanatoController from '../../controllers/mct/porcelanato.controller'

const porcelanatoRoutes = Router();

porcelanatoRoutes.get('/', JwtChecker.verifyJwt, PorcelanatoController.listPorcelanatos)
porcelanatoRoutes.get('/:porcelanato_id', JwtChecker.verifyJwt, PorcelanatoController.getPorcelanato)
porcelanatoRoutes.post('/', JwtChecker.verifyJwt, PorcelanatoController.createPorcelanato)
porcelanatoRoutes.put('/:porcelanato_id', JwtChecker.verifyJwt, PorcelanatoController.updatePorcelanato)

export default porcelanatoRoutes