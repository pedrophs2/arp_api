import {Router} from 'express'
import UsuarioController from '../../controllers/iago/usuario.controller'

const usuarioRoutes = Router()

usuarioRoutes.get('/', UsuarioController.listUsuarios)

export default usuarioRoutes

