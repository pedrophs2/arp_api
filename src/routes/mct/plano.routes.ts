import { Router } from 'express'
import JwtChecker from '../../middleware/JwtChecker'

import PlanoController from './../../controllers/mct/plano.controller'

const router = Router()

router.get('/', JwtChecker.verifyJwt, PlanoController.listPlanos)
router.get('/:plano_id', JwtChecker.verifyJwt, PlanoController.getPlano)

export default router
