import OrcamentoServices from '../../services/mct/orcamento.services'

class OrcamentoController {

    async listOrcamentos(req: any, res: any) {
        try{
            let response = await OrcamentoServices.listOrcamentos(req.params.usuario_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário cadastrado', response: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getOrcamentoById(req: any, res: any) {
        let usuario_id = req.params.usuario_id
        let orcamento_id = req.params.orcamento_id

        try{
            let response = await OrcamentoServices.getOrcamentoById(orcamento_id, usuario_id)

            if(response != null)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createOrcamento(req: any, res: any) {
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

    async updateOrcamento(req: any, res: any) {
        let orcamento = req.body
        let id = req.params.id

        try{
            let response = await OrcamentoServices.updateOrcamento(orcamento, id)

            if(response)
                res.status(201).send('Orçamento atualizado')
            else
                res.status(400).send('Erro na atualização do orçamento')

        } catch(error) {
            res.status(500).send({message: 'Erro na requisição', error: error})
        }
    }

    async deleteOrcamento(req: any, res: any) {
        let id = req.params.id

        try {
            let response = await OrcamentoServices.deleteOrcamento(id)

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
