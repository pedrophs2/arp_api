import { Router } from 'express'
import CustoController from '../../controllers/mct/custo.controller'
import JwtChecker from '../../middleware/JwtChecker'

const custoRoutes = Router()

custoRoutes.get('/:usuario_id', JwtChecker.verifyJwt, CustoController.getCusto)
custoRoutes.post('/:usuario_id', JwtChecker.verifyJwt, CustoController.setCusto)

export default custoRoutes