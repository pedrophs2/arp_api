import { Router } from 'express'
import PessoasController from '../../controllers/csn/pessoas.controller'

const pessoasRoutes = Router()

pessoasRoutes.get('/', PessoasController.listPessoasSemEscolha)
pessoasRoutes.post('/', PessoasController.createPessoa)

export default pessoasRoutes