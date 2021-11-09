import { Router } from 'express';
import AuthController from '../../controllers/mct/auth.controller';
import UsuarioController from '../../controllers/mct/usuario.controller';

const authRoutes = Router();

authRoutes.post('/', AuthController.login);
authRoutes.post('/admin', AuthController.adminLogin)
authRoutes.post('/forgot', AuthController.forgot)
authRoutes.post('/novo', UsuarioController.createUser)

export default authRoutes;
