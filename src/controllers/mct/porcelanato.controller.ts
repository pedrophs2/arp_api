import { Porcelanato } from './../../models/mct/porcelanato.model';
import PorcelanatoServices from '../../services/mct/porcelanato.services'

class PorcelanatoController {
    async listPorcelanatos(req: any, res: any) {
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

    async getPorcelanato(req: any, res: any) {
        try {
            let response = await PorcelanatoServices.getPorcelanato(req.params.porcelanato_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async createPorcelanato(req: any, res: any) {
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

    async updatePorcelanato(req: any, res: any) {
        let porcelanato: Porcelanato = req.body

        try {
            let response = await PorcelanatoServices.updatePorcelanato(porcelanato, req.params.porcelanato_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async deletePorcelanato(req: any, res: any) {
        try {
            let response = await PorcelanatoServices.deletePorcelanato(req.params.porcelanato_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum porcelanato encontrado'})
        } catch (error: any) {
            console.log(error.message)
            res.status(500).send({ message: error.message || 'Erro no processo de requisição'})
        }
    }
}

export default new PorcelanatoController()