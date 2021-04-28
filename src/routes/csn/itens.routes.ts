import { Router } from 'express'
import ItensController from '../../controllers/csn/itens.controller'

const itensRoutes = Router()

itensRoutes.get('/', ItensController.listPendentes)
itensRoutes.put('/pick', ItensController.itemPicked)

export default itensRoutes