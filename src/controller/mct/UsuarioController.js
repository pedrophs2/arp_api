const UsuarioServices = require('../../services/mct/UsuarioServices')

class UsuarioController {

    async listUsers(req, res) {
        try{
            let response = await UsuarioServices.listUsers()
            
            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})
            
        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getUser(req, res) {
        let id = req.params.id

        try{
            let response = await UsuarioServices.getUser(id)
            
            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createUser(req, res) {
        try {
            let user = req.body
            let response = await UsuarioServices.createUser(user)
            
            if(response)
                res.status(201).send('Usuário inserido com sucesso')
            else
                res.status(500).send({message: 'Erro na inserção de usuário', error: null})

        }catch (error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

    async updateUser(req, res) {        
        try{
            let user = req.body

            let response = await UsuarioServices.updateUser(user, req.params.id)

            if(data != null)
                res.status(200).send('Usuário atualizado com sucesso')
            else
                res.status(500).send({message: 'Erro na atualização do usuário', error: null})

        } catch(error) {
            res.status(500).send({message: 'ERRO', error: error})
        }
    }


    async deleteUser(req, res) {
        let id = req.params.id

        try {
            let response = await UsuarioServices.deleteUser(id)

            if(data != undefined)
                res.status(200).send('Usuário excluído com sucesso')
            else
                res.status(500).send({message: 'Erro na exclusão do usuário'})

        } catch(error) {
            res.status(500).send({message: 'Erro na exclusão do usuário', error: error})
        }
    }

}

module.exports = new UsuarioController()