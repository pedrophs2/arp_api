import ItensServices from '../../services/csn/itens.services'

class ItensController {

    async listPendentes(req: any, res: any) {
        try {
            let response = await ItensServices.listPendentes()

            if(response != null)
                res.status(200).send(response)
            else
                res.status(401).send({message: 'Não foram encontrados mais itens disponíveis'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

    async itemPicked(req: any, res: any) {
        try{
            let response = await ItensServices.itemPicked(req.body.id_pessoa, req.body.id_item)

            if(response)
                res.status(200).send('Item selecionado !!')
            else
                res.status(400).send('Erro na seleção do item')
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição'+ error})
        }
    }

}

export default new ItensController()