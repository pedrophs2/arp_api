import { Router } from 'express'
import DashboardController from '../../controllers/mct/dashboard.controller'
import JwtChecker from '../../middleware/JwtChecker'

const routes = Router()

routes.get('/:cd_usuario', DashboardController.getDashboard)

export default routes