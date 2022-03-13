import { Request, Response } from 'express'
import UsuarioServices from '../../services/iago/usuario.services'

export class UsuarioController {
    
    async listUsuarios(req: Request, res: Response) {
        try {
            let data = await UsuarioServices.listUsuarios()

            if(res != null)
                res.status(200).send(data)
            else   
                res.status(401).send({message: 'Usuários não encontrados'})
        } catch(error) {
            console.log(error)
            res.status(500).send({message: 'Erro no processo de requisição'})
        }
    }
}

export default new UsuarioController()