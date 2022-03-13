import { Request, Response } from 'express';
import { PorcelanatoOrcamento } from './../../models/mct/porcelanato-orcamento';
import PorcelanatoOrcamentoServices from './../../services/mct/porcelanato-orcamento.services'

class PorcelanatoOrcamentoController {
    async createPorcelanatoOrcamento(req: Request, res: Response) {
        let orcamentoPorcelanato: PorcelanatoOrcamento = <PorcelanatoOrcamento> req.body
        try {
            let response = await PorcelanatoOrcamentoServices.createPorcelanatoOrcamento(orcamentoPorcelanato)

            if(response)
                res.status(200).send({message: 'Porcelanato cadastrado com sucesso'})
            else
                res.status(204).send({message: 'Erro na inserção do porcelanato'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }

    async getPorcelanatosByOrcamento(req: Request, res: Response) {
        try {
            let response = await PorcelanatoOrcamentoServices.getPorcelanatosByOrcamento(
                Number(req.params.orcamento_id)
            )

            if(response)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Erro na inserção do porcelanato'})
        } catch (error) {
            res.status(500).send({ message: 'Erro no processo de requisição'})
        }
    }
}

export default new PorcelanatoOrcamentoController()