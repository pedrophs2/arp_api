import {Router} from 'express'
import usuarioRoutes from './iago/usuario.routes'

const iagoRoutes = Router()

iagoRoutes.use('/usuario', usuarioRoutes)

export default iagoRoutes