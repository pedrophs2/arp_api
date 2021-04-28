import { Router } from 'express';

import itensRoutes from './csn/itens.routes'
import pessoasRoutes from './csn/pessoas.routes'

const csnRouter = Router()

csnRouter.use('/itens', itensRoutes)
csnRouter.use('/pessoas', pessoasRoutes)

export default csnRouter