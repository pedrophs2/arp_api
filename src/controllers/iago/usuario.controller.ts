import UsuarioServices from '../../services/iago/usuario.services'

class UsuarioController {
    
    async listUsuarios(req: any, res:any) {
        try {
            let res = await UsuarioServices.listUsuarios()

            if(res != null)
                res.status(200).send(res)
            else   
                res.status(401).send({message: 'Usuários não encontrados'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição'})
        }
    }
}

export default new UsuarioController()