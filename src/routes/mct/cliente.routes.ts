import { Router } from 'express';
import ClienteController from '../../controllers/mct/cliente.controller';
import JwtChecker from '../../middleware/JwtChecker';

const clienteRoutes = Router();

clienteRoutes.get('/:usuario_id', JwtChecker.verifyJwt, ClienteController.listClientesByUsuario)
clienteRoutes.get('/:usuario_id/:cliente_id', JwtChecker.verifyJwt, ClienteController.listClientesByUsuarioCliente)
clienteRoutes.post('', JwtChecker.verifyJwt, ClienteController.createCliente)
clienteRoutes.put('', JwtChecker.verifyJwt, ClienteController.updateCliente)

export default clienteRoutes
