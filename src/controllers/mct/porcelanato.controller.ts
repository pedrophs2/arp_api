import { Porcelanato } from './../../models/mct/porcelanato.model';
import PorcelanatoServices from '../../services/mct/porcelanato.services'
import { Request, Response } from 'express';

class PorcelanatoController {
    async listPorcelanatos(req: Request, res: Response) {
        try {
            let response = await PorcelanatoServices.listPorcelanatos()

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async getPorcelanato(req: Request, res: Response) {
        try {
            let response = await PorcelanatoServices.getPorcelanato(
                Number(req.params.porcelanato_id)
            )

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async createPorcelanato(req: Request, res: Response) {
        let porcelanato = req.body

        try {
            let response = await PorcelanatoServices.createPorcelanato(porcelanato)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async updatePorcelanato(req: Request, res: Response) {
        let porcelanato: Porcelanato = req.body

        try {
            let response = await PorcelanatoServices.updatePorcelanato(
                porcelanato, Number(req.params.porcelanato_id)
            )

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async deletePorcelanato(req: Request, res: Response) {
        try {
            let response = await PorcelanatoServices.deletePorcelanato(
                Number(req.params.porcelanato_id)
            )

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error: any) {
            res.status(500).send({ message: error.message || 'Erro no processo de requisição'})
        }
    }
}

export default new PorcelanatoController()