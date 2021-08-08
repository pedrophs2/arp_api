import { Router } from 'express'
import EmpresaController from '../../controllers/mct/empresa.controller'

const routes = Router()

routes.get('', EmpresaController.getEmpresas)
routes.get('/:cd_usuario', EmpresaController.getEmpresasByUsuario)
routes.post('', EmpresaController.createEmpresa)
routes.put('', EmpresaController.updateEmpresa)

export default routes