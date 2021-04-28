import { Router } from 'express';

import mctRoutes from './mct.routes'
// import bckRoutes from './bck.routes'
import csnRoutes from './csn.routes'

const routes = Router();

//Mercado do Construtor
routes.use('/api/mct', mctRoutes);

//Business Cook
// routes.use('/api/bck', usersRoutes);

//CasaNova
routes.use('/api/csn', csnRoutes)

export default routes;
