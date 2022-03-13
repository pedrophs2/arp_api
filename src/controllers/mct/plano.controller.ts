import { Request, Response } from 'express'
import { Plano } from '../../models/mct/plano.model'
import PlanoServices from './../../services/mct/plano.services'

class PlanoController {

    async listPlanos(req: Request, res: Response) {
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

    async getPlano(req: Request, res: Response) {
        try { 
            let data = await PlanoServices.getPlano(
                Number(req.params.plano_id)
            )

            if(data)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Sem planos cadastrados'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição'})
        }
    }

    async createPlano(req: Request, res: Response) {
        let plano = <Plano> req.body

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

    async updatePlano(req: Request, res: Response) {
        let plano = <Plano> req.body

        try {
            let data = await PlanoServices.updatePlano(plano)

            if(data)
                res.status(200).send({message: 'Plano salvo com sucesso'})
            else
                res.status(400).send({message: 'Erro ao salvar plano'})
        } catch(error) {
            res.status(500).send(error)
        }
    }

}

export default new PlanoController()