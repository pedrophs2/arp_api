import { Router } from 'express';

import mctRoutes from './mct.routes'
// import bckRoutes from './bck.routes'

const routes = Router();

//Mercado do Construtor
routes.use('/api/mct', mctRoutes);

//Business Cook
// routes.use('/api/bck', usersRoutes);

export default routes;
