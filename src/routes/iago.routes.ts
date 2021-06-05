import {Router} from 'express'
import usuarioRoutes from './iago/usuario.routes'

const iagoRoutes = Router()

iagoRoutes.use(usuarioRoutes)

export default iagoRoutes