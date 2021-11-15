import { Request, Response } from 'express'
import PlanoServices from './../../services/mct/plano.services'

class PlanoController {

    async listPlanos(req: any, res: any) {
        try { 
            let data = await PlanoServices.listPlanos()

            if(data)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Sem planos cadastrados'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição'})
        }
    }

    async getPlano(req: any, res: any) {
        try { 
            let data = await PlanoServices.getPlano(req.params.plano_id)

            if(data)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Sem planos cadastrados'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição'})
        }
    }

    async createPlano(req: any, res: any) {
        let plano = req.body

        try {
            let data = await PlanoServices.createPlano(plano)

            if(data)
                res.status(201).send({message: 'Plano criado com sucesso'})
            else   
                res.status(400).send({message: 'Erro ao criar plano'})
        } catch(error) {
            res.status(500).send(error)
        }
    }

}

export default new PlanoController()