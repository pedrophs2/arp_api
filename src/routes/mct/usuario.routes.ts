import { Router } from 'express';
import UsuarioController from '../../controllers/mct/usuario.controller'
import JwtChecker from '../../middleware/JwtChecker'

const usuarioRoutes = Router();

/**
 * @swagger
 * api/mct/usuarios:
 *      get: 
 *          summary: Listagem de todos os usuários cadastrados
 *          description: Listagem de todos os usuários cadastrados
 *          produces: application/json
 *          responses:
 *              '200':
 *                  description: Usuários encontrados
 *              '400': 
 *                  description: Usuários não encontrados
 */
usuarioRoutes.get('/', JwtChecker.verifyJwt, UsuarioController.listUsers)
usuarioRoutes.get('/admin', JwtChecker.verifyJwt, UsuarioController.listUsersAdmin)

/**
 * @swagger
 * api/mct/usuarios/{idUsuario}:
 *      get: 
 *          summary: Exibição de Usuário
 *          description: Exibição de usuário selecionado
 *          produces: 
 *              - application/json
 *          parameters: 
 *              - name: idUsuario
 *                required: true
 *                type: string
 *          responses:
 *              '200':
 *                  description: Usuário encontrado
 *              '400': 
 *                  description: Usuário não encontrado
 */
usuarioRoutes.get('/:id', JwtChecker.verifyJwt, UsuarioController.getUser)

/**
 * @swagger
 * api/mct/usuarios:
 *      post: 
 *          summary: Criação de usuário
 *          description: Criação de usuário
 *          responseClass: Usuário
 *          consumes: application/json
 *          parameters: 
 *              - name: usuario_cpf
 *                required: true
 *                type: string
 *                example: 111.111.111-11
 *              - name: usuario_nome
 *                required: true
 *                type: string
 *                example: Fulano da Silva
 *              - name: usuario_email
 *                required: true
 *                type: string
 *                example: fulano@email.com
 *              - name: usuario_senha
 *                required: true
 *                type: string
 *              - name: usuario_fone
 *                required: true
 *                type: string
 *                example: (77) 99999-999
 *              - name: usuario_orcamentos
 *                required: true
 *                type: integer
 *                example: 0
 *              - name: usuario_vip
 *                required: true
 *                type: boolean
 *                example: true
 *              - name: usuario_vip_dt_final
 *                required: true
 *                type: timestamp
 *                
 *          responses:
 *              '200':
 *                  description: Usuário criado
 *              '400': 
 *                  description: Usuário não criado
 */
usuarioRoutes.post('/', JwtChecker.verifyJwt, UsuarioController.createUser)
usuarioRoutes.post('/admin', JwtChecker.verifyJwt, UsuarioController.createUserAdmin)
usuarioRoutes.put('/:id', JwtChecker.verifyJwt, UsuarioController.updateUser)
usuarioRoutes.put('/admin/:id', JwtChecker.verifyJwt, UsuarioController.updateUserAdmin)
usuarioRoutes.delete('/:id', JwtChecker.verifyJwt, UsuarioController.deleteUser)

export default usuarioRoutes
