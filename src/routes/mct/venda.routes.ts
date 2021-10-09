import { Router } from 'express'
import VendaController from '../../controllers/mct/venda.controller'
import JwtChecker from '../../middleware/JwtChecker'

const routes = Router()

routes.post('/credito', VendaController.vendaCredito)

export default routes