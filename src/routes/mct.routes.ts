import { Router } from 'express';

import authRoutes from './mct/auth.routes'
import clienteRoutes from './mct/cliente.routes'
import orcamentoRoutes from './mct/orcamento.routes'
import usuarioRoutes from './mct/usuario.routes'

const mctRouter = Router();

mctRouter.use('/auth', authRoutes)
mctRouter.use('/cliente', clienteRoutes)
mctRouter.use('/orcamento', orcamentoRoutes)
mctRouter.use('/usuario', usuarioRoutes)

export default mctRouter;
