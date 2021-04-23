import { Router } from 'express';
import AuthController from '../../controllers/mct/auth.controller';

const authRoutes = Router();

authRoutes.post('/', AuthController.login);
authRoutes.post('/forgot', AuthController.forgot)

export default authRoutes;
