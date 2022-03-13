import { Request, Response } from 'express'
import ItensServices from '../../services/csn/itens.services'

class ItensController {

    async listPendentes(req: Request, res: Response) {
        try {
            let response = await ItensServices.listPendentes()

            if(response != null)
                res.status(200).send(response)
            else
                res.status(401).send({message: 'Não foram encontrados mais itens disponíveis'})
        } catch(error) {
            console.log(error)
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

    async itemPicked(req: Request, res: Response) {
        try{
            let response = await ItensServices.itemPicked(req.body.id_pessoa, req.body.id_item)

            if(response)
                res.status(200).send('Item selecionado !!')
            else
                res.status(400).send('Erro na seleção do item')
        } catch(error) {
            console.log(error)
            res.status(500).send({message: 'Erro no processo de requisição'+ error})
        }
    }

}

export default new ItensController()