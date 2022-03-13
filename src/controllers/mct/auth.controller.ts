import { Request, Response } from 'express'
import { Usuario } from '../../models/mct/usuario.model'
import AuthServices from '../../services/mct/auth.services'

class AuthController {

    async login(req: Request, res: Response) {
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

    async adminLogin(req: Request, res: Response) {
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

    async forgot(req: Request, res: Response) {
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

    async getUserFromCrypt(req: Request, res: Response) {
        try {
            let encryptedData = req.body
            let userData = await AuthServices.getUserFromCrypt(encryptedData.data)

            if(userData)
                res.status(200).json(userData)
            else
                res.status(400).send({message: 'Nenhuma conta encontrada'})
        } catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

}

export default new AuthController()
