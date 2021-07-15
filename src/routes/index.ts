import { Router } from 'express';

import mctRoutes from './mct.routes'
import csnRoutes from './csn.routes'
import iagoRoutes from './iago.routes'

const routes = Router();

//Mercado do Construtor
routes.use('/api/mct', mctRoutes);

//Business Cook
// routes.use('/api/bck', usersRoutes);

//CasaNova
routes.use('/api/csn', csnRoutes)

//IagoRoutes
routes.use('/api/iago', iagoRoutes)

export default routes;
