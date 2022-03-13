import { Request, Response, Router } from 'express';

import mctRoutes from './mct.routes'
import csnRoutes from './csn.routes'
import iagoRoutes from './iago.routes'

import { DataCrypt } from '../utils/data-crypt';

const routes = Router();

//Mercado do Construtor
routes.use('/api/mct', mctRoutes);

export default routes;
