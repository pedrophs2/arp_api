const AuthServices = require('../../services/mct/AuthServices')

class AuthController {

    async login(req, res) {
        try {
            let user = req.body        
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

    async createUser(req, res) {
        try {
            let user = req.body
            let response = await AuthServices.createUser(user)

            if(response)
                res.status(201).send('Usuário criado com sucesso')
            else
                res.status(400).send('Erro na criação do usuário')

        }catch (error) {
            res.status(500).send({message: 'ERRO: ' + error, error: error})
        }
    }

    async forgot(req, res) {
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

module.exports = new AuthController()