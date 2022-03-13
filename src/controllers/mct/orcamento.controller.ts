import { Request, Response } from 'express'
import OrcamentoServices from '../../services/mct/orcamento.services'

class OrcamentoController {

    async listOrcamentos(req: Request, res: Response) {
        try{
            let response = await OrcamentoServices.listOrcamentos(
                Number(req.params.usuario_id)
            )

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário cadastrado', response: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getOrcamentoById(req: Request, res: Response) {
        let usuario_id = req.params.usuario_id
        let orcamento_id = req.params.orcamento_id

        try{
            let response = await OrcamentoServices.getOrcamentoById(
                Number(orcamento_id), Number(usuario_id)
            )

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createOrcamento(req: Request, res: Response) {
        let orcamento = req.body

        try {
            let response = await OrcamentoServices.createOrcamento(orcamento)

            if(response)
                res.status(201).send('Orçamento criado com sucesso')
            else
                res.status(400).send({message: 'Erro na inserção do orçamento'})

        } catch(error) {
            res.status(500).send({message: 'Erro na requisição: ', error: error})
        }
    }

    async updateOrcamento(req: Request, res: Response) {
        let orcamento = req.body
        let id = req.params.id

        try{
            let response = await OrcamentoServices.updateOrcamento(orcamento, Number(id))

            if(response)
                res.status(201).send('Orçamento atualizado')
            else
                res.status(400).send('Erro na atualização do orçamento')

        } catch(error) {
            res.status(500).send({message: 'Erro na requisição', error: error})
        }
    }

    async deleteOrcamento(req: Request, res: Response) {
        let id = req.params.id

        try {
            let response = await OrcamentoServices.deleteOrcamento(Number(id))

            if(response)
                res.status(200).send('Orçamento excluído com sucesso')
            else
                res.status(400).send('Erro na exclusão do orçamento')
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição de dados', error: error})
        }
    }

}

export default new OrcamentoController()
