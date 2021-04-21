const ClienteServices = require('../../services/mct/ClienteServices')

class ClienteController {

    async listClientesByUsuario(req, res) {
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

    async createCliente (req, res) {
        try {
            let customer = req.body
            let response = await ClienteServices.createCliente(customer)

            if(response)
                res.status(201).send('Cliente criado com sucesso !')
            else
                res.status(400).send('Erro na criação do cliente')
        } catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

    async updateCliente (req, res) {
        try {
            let customer = req.body
            let response = await ClienteServices.updateCliente(customer)

            if(response)
                res.status(201).send('Cliente criado com sucesso !')
            else
                res.status(400).send('Erro na criação do cliente')
        } catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

}

module.exports = new ClienteController()