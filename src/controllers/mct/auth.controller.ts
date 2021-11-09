import { Usuario } from '../../models/mct/usuario.model'
import AuthServices from '../../services/mct/auth.services'

export class AuthController {

    async login(req: any, res: any) {
        try {
            let user = <Usuario> req.body
            let response = await AuthServices.login(user)

            if(response.token != null){
                res.status(200).send(response)
            }else{
                res.status(400).send({message: 'Usuário ou senha incorretos.'})
            }
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

    async adminLogin(req: any, res: any) {
        try {
            let user = <Usuario> req.body
            let response = await AuthServices.adminLogin(user)

            if(response.token != null){
                res.status(200).send(response)
            }else{
                res.status(400).send({message: 'Usuário ou senha incorretos.'})
            }
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

    async forgot(req:any, res:any) {
        try {
            let response = await AuthServices.forgot(req.body.usuario_email)

            if(response) {
                res.status(200).send('Senha enviada para o email solicitado')
            }else{
                res.status(400).send('Não foi encontrada uma conta com essas credenciais')
            }
        }catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

}

export default new AuthController()
