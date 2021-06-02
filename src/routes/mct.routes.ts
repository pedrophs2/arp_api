import { Router } from 'express';

import authRoutes from './mct/auth.routes'
import clienteRoutes from './mct/cliente.routes'
import orcamentoRoutes from './mct/orcamento.routes'
import usuarioRoutes from './mct/usuario.routes'
import pdfRoutes from './mct/pdf.routes'
import porcelanatoRoutes from './mct/porcelanato.routes'
import porcelanatoOrcamentoRoutes from './mct/porcelanato-orcamento.routes'

const mctRouter = Router();

mctRouter.use('/auth', authRoutes)
mctRouter.use('/cliente', clienteRoutes)
mctRouter.use('/orcamento', orcamentoRoutes)
mctRouter.use('/usuario', usuarioRoutes)
mctRouter.use('/pdf', pdfRoutes)
mctRouter.use('/porcelanato', porcelanatoRoutes)
mctRouter.use('/porcelanato-orcamento', porcelanatoOrcamentoRoutes)

export default mctRouter;
