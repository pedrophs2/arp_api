import { Request, Response } from 'express'
import UsuarioServices from '../../services/mct/usuario.services'

class UsuarioController {

    async listUsers(req: Request, res: Response) {
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

    async listUsersAdmin(req: Request, res: Response) {
        try{
            let response = await UsuarioServices.listUsersAdmin()

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getUser(req: Request, res: Response) {
        let id = req.params.id

        try{
            let response = await UsuarioServices.getUser(Number(id))

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            let user = req.body
            let response = await UsuarioServices.createUser(user)

            if(response > 0)
                res.status(201).send({message: 'Usuário inserido com sucesso', id: response})
            else
                res.status(500).send({message: 'Erro na inserção de usuário', error: null})

        }catch (error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

    async createUserAdmin(req: Request, res: Response) {
        try {
            let user = req.body
            let response = await UsuarioServices.createUserAdmin(user, 1)

            if(response > 0)
                res.status(201).send({message: 'Usuário inserido com sucesso', id: response})
            else
                res.status(500).send({message: 'Erro na inserção de usuário', error: null})

        }catch (error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

    async updateUser(req: Request, res: Response) {
        try{
            let user = req.body

            let response = await UsuarioServices.updateUser(user, Number(req.params.id))

            if(response != null)
                res.status(200).send(response)
            else
                res.status(401).send({message: 'Erro na atualização do usuário'})

        } catch(error) {
            res.status(500).send({message: 'ERRO', error: error})
        }
    }

    async updateUserAdmin(req: Request, res: Response) {
        try{
            let user = req.body

            let response = await UsuarioServices.updateUserAdmin(user, Number(req.params.id))

            if(response != null)
                res.status(200).send(response)
            else
                res.status(401).send({message: 'Erro na atualização do usuário'})

        } catch(error) {
            res.status(500).send({message: 'ERRO', error: error})
        }
    }

    async deleteUser(req: Request, res: Response) {
        let id = req.params.id

        try {
            let response = await UsuarioServices.deleteUser(Number(id))

            if(response != undefined)
                res.status(200).send('Usuário excluído com sucesso')
            else
                res.status(500).send({message: 'Erro na exclusão do usuário'})

        } catch(error) {
            res.status(500).send({message: 'Erro na exclusão do usuário', error: error})
        }
    }

}

export default new UsuarioController()
