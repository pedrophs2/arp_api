import { Router } from 'express';
import UsuarioController from '../../controllers/mct/usuario.controller'
import JwtChecker from '../../middleware/JwtChecker'

const usuarioRoutes = Router();

usuarioRoutes.get('/', JwtChecker.verifyJwt, UsuarioController.listUsers)
usuarioRoutes.get('/:id', JwtChecker.verifyJwt, UsuarioController.getUser)
usuarioRoutes.post('/', JwtChecker.verifyJwt, UsuarioController.createUser)
usuarioRoutes.put('/:id', JwtChecker.verifyJwt, UsuarioController.updateUser)
usuarioRoutes.delete('/:id', JwtChecker.verifyJwt, UsuarioController.deleteUser)

export default usuarioRoutes
