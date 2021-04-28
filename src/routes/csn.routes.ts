import { Router } from 'express';

import itensRoutes from './csn/itens.routes'

const csnRouter = Router()

csnRouter.use('/itens', itensRoutes)

export default csnRouter