import { Cliente } from './../../models/mct/cliente.model';
import ClienteServices from '../../services/mct/cliente.services'

class ClienteController {

    async listClientesByUsuario(req: any, res: any) {
        try {
            let response = await ClienteServices.listClientesByUsuario(req.params.usuario_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum cliente encontrado'})
        } catch(error) {
            res.status(500)({message: 'Erro no processo de requisição', error: error})
        }
    }

    async listClientesByUsuarioCliente(req: any, res: any) {
        try {
            let response = await ClienteServices.listClientesByUsuarioCliente(req.params.usuario_id, req.params.cliente_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum cliente encontrado'})
        } catch(error) {
            res.status(500)({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createCliente (req: any, res: any) {
        try {
            let customer = <Cliente> req.body
            let response = await ClienteServices.createCliente(customer)

            if(response)
                res.status(201).send('Cliente criado com sucesso !')
            else
                res.status(400).send('Erro na criação do cliente')
        } catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

    async updateCliente (req: any, res: any) {
        try {
            let customer = <Cliente> req.body
            let response = await ClienteServices.updateCliente(customer)

            if(response)
                res.status(201).send('Cliente salvo com sucesso !')
            else
                res.status(400).send('Erro na criação do cliente')
        } catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

}

export default new ClienteController()
